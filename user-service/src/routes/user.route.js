const express = require('express');
const router = express.Router();
const { getProfile } = require('../controllers/user.controller');
const { requireAuth } = require('../middlewares/getUserContext.middleware');



router.get('/get-profile', requireAuth , getProfile)

module.exports = router;