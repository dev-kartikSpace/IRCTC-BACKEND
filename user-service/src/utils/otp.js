



async function generateAndStoreOtp(meta){
     const rateKey = `otp:rate:${meta.email}`;
     const sentCount = parseInt(await redis.get(rateKey) || '0', 10);
     if(sentCount >= RATE_MAX){
          throw new TooManyRequestsError(
               "Too many OTP requests. Try again later.",
               "OTP_RATE_LIMIT"
          )
     }

    const otp = otpGenerator.generate(6, {
          upperCaseAlphabets: false,
          lowerCaseAlphabets: false,
          specialChars: false
     })

     const otpSessionId = crypto.randomUUID();
     const hashed = hmacFor(meta.email, otp);
     await redis.set(`otp:session:${otpSessionId}`, JSON.stringify({
          hashedOtp: hashed,
          meta
     }), 'EX', OTP_TTL);
     await redis.incr(rateKey);
     await redis.expire(rateKey, 3600);
     return {otp, otpSessionId};
}