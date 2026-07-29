const express = require('express');
const router = express.Router();
const {sendOTP} = require('../controllers/auth.controller');

router.post("/send-otp", sendOTP);
// router.post("/verify-otp", verifyOTP);
// router.post("/login", login);
// router.post("/refresh", rotateRefreshToken);
// router.post("/google-auth", verifyGoogleIdToken);
module.exports = router;