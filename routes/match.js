const express = require('express');
const router = express.Router();

const Match = require('../models/Match');

/* Summoner get Match History -> Paramater: accountId */
router.get('/history/:accountId', (req, res, next) => {
    const {accountId } = req.params;

    Match.getMatchHistory(req.session.region, accountId, (error, result) => {
        if(error)
            res.json(error);
        else
            res.json(result);
    });
});

/* Summoner get Match Detail -> Paramater: matchId */
router.get('/detail/:matchId', (req, res, next) => {
    const {matchId } = req.params;

    Match.getMatchDetail(req.session.region, matchId, (error, result) => {
        if(error)
            res.json(error);
        else
            res.json(result);
    });
});


module.exports = router;
