const express = require('express');
const { createTrain, createRoute, getAllTrains, getTrainById } = require('../controllers/train.controller');
const { getUserContext } = require('../middlewares/getUserContext.middleware');

const router = express.Router();

router.post("/train", getUserContext, createTrain);
router.post("/route", getUserContext, createRoute);
router.get("/train/:trainId", getUserContext, getTrainById);

module.exports = router;