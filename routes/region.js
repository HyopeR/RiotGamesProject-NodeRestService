const express = require('express');
const router = express.Router();

const regionController = require('../middleware/regionController');
const Region = require('../models/Region');

/* Get All Regions */
router.get('/', (req, res, next) => {
    Region.getAllRegions((error, result) => {
        if(error)
            res.json(error);
        else
            res.json(result);
    });
});

/* Get region status - Lol Status */
router.get('/status/:region', regionController, (req, res, next) => {
    Region.getRegionStatus(req.session.region, (error, result) => {
        if (error)
            res.json(error);
        else
            res.json(result);
    });
});

module.exports = router;
