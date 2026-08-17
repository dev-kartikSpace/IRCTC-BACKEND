const asyncHandler = require("../utils/asyncHandler");
const { BadRequestError } = require("../utils/error");


exports.createStation = asyncHandler(async(req,res) => {
    const {name, code, city, state} = req.body;

    if(!name || code || city || state){
        throw new BadRequestError('stationCode, stationName, city and state are required');
    }

     const station = await stationService.createStation({
          code: code.toUpperCase(),
          name,
          city,
          state
     });

     res.status(201).json({
          success: true,
          message: 'Station Created Successfully',
          data: station
     })
})