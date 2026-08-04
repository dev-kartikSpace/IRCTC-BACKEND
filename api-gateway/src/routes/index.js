const express = require("express");
const { requireAuth } = require("../middlewares/auth.middleware");
const { createProxy, getCircuitBreakerStatus } = require("../services/proxy");
const {
  ipRateLimit,
  endpointRateLimit,
  combinedRateLimit,
} = require("../middlewares/rateLimiting.middleware");
const { config } = require("../config");

const router = express.Router();

const userServiceProxy = createProxy(
  "userService",
  config.SERVICES.USER_SERVICE_URL,
);

// public routes
router.post(
  "/users/auth/send-otp",
  endpointRateLimit(5, 3600000), // 5 requests per hour
  userServiceProxy,
);

router.post(
  "/users/auth/verify-otp",
  endpointRateLimit(10, 3600000), // 10 requests per hour
  userServiceProxy,
);

router.post(
  "/users/auth/login",
  endpointRateLimit(100, 900000), // 100 requests per 15 minutes
  userServiceProxy,
);

router.post(
  "/users/auth/google-auth",
  endpointRateLimit(10, 900000), // 10 requests per 15 minutes
  userServiceProxy,
);

router.post(
  "/users/auth/refresh",
  endpointRateLimit(20, 900000), // 20 requests per 15 minutes
  userServiceProxy,
);


// private routes
router.get(
     '/users/user/profile',
     requireAuth,
     combinedRateLimit(),
     userServiceProxy
)



router.get('/gateway/health', (req, res) => {
     res.status(200).json({
          success: true,
          message: "API Gateway is healthy",
          timestamp: new Date().toISOString()
     });
});

module.exports = router;