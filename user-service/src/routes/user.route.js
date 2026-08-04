const express = require('express');
const router = express.Router();
const { getProfile } = require('../controllers/user.controller');
const {getUserContext} = require('../middlewares/getUserContext.middleware');




router.get("/profile", getUserContext, getProfile);

module.exports = router;