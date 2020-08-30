const express = require('express');
const router = express.Router();

const Champion = require('../models/Champion');

/* Get Free Champion Rotation */
router.get('/free/rotation', (req, res, next) => {
    const {summonerId } = req.params;

    Champion.getFreeRotation(req.session.region, (error, result) => {
        if(error)
            res.json(error);
        else
            res.json(result);
    });
});

module.exports = router;
