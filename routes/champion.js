const express = require('express');
const router = express.Router();

const Champion = require('../models/Champion');

/* Get All Champions Data */
router.get('/:version/:language', (req, res, next) => {
    const { version, language } = req.params;
    console.log(version, language);

    Champion.getChampions(version, language, (error, result) => {
        if(error)
            res.json(error);
        else
            res.json(result);
    });
});

/* Get One Champion Data */
router.get('/:version/:language/:championName', (req, res, next) => {
    const { version, language, championName } = req.params;

    Champion.getChampion(version, language, championName, (error, result) => {
        if(error)
            res.json(error);
        else
            res.json(result);
    });
});

/* Get Free Champion Rotation */
router.get('/free/rotation', (req, res, next) => {
    Champion.getFreeRotation(req.session.region, (error, result) => {
        if(error)
            res.json(error);
        else
            res.json(result);
    });
});

module.exports = router;
