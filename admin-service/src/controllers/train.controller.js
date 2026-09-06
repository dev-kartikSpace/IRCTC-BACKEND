const asyncHandler = require("../utils/asyncHandler");
const { BadRequestError } = require("../utils/error");
const trainService = require('../services/train.service');

exports.createTrain = asyncHandler(async(req, res) => {
    const {trainNumber , trainName, coachName, seats} = req.body;

    if(!trainNumber || !trainName || !coachName || !seats){
        throw new BadRequestError("TrainNumber, TrainName, CoachName and seats are required");
    }

    if(seats.length === 0){
        throw new BadRequestError("Atleast one seat must be required");
    }
    
    const train = await trainService.createTrain({trainNumber , trainName, coachName, seats});
    return res.status(201).json({
        success: true,
        message : "Train added successfully",
        data : train
    })
})