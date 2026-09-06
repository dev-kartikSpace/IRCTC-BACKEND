const express = require('express');
const { createTrain, createRoute, getAllTrains, getTrainById } = require('../controllers/train.controller');
const { getUserContext } = require('../middlewares/getUserContext.middleware');

const router = express.Router();

router.post("/train", getUserContext, createTrain);

module.exports = router;