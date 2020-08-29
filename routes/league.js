const express = require('express');
const router = express.Router();

const League = require('../models/League');

/* Summoner get League -> Paramater: summonerId */
router.get('/summoner/:summonerId', (req, res, next) => {
    const {summonerId } = req.params;

    League.getLeagueSummoner(req.session.region, summonerId, (error, result) => {
        if(error)
            res.json(error);
        else
            res.json(result);
    });
});

module.exports = router;
