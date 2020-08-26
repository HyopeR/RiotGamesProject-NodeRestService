const express = require('express');
const router = express.Router();

const regions = require('../helpers/regionDb');
const urlApiKey = '?api_key='+process.env.API_KEY;

/* Get All Regions */
router.get('/', (req, res, next) => {
    res.json(regions);
});

module.exports = router;
