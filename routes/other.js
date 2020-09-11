const express = require('express');
const router = express.Router();

const Other = require('../models/Other');

/* Get Languages */
router.get('/languages', (req, res, next) => {

    Other.getLanguages((error, result) => {
        if(error)
            res.json(error);
        else
            res.json(result);
    });
});

/* Get Versions */
router.get('/versions', (req, res, next) => {

    Other.getVersions((error, result) => {
        if(error)
            res.json(error);
        else
            res.json(result);
    });
});


/* Get Seasons */
router.get('/seasons', (req, res, next) => {

    Other.getSeasons((error, result) => {
        if(error)
            res.json(error);
        else
            res.json(result);
    });
});

/* Get Queues */
router.get('/queues', (req, res, next) => {

    Other.getQueues((error, result) => {
        if(error)
            res.json(error);
        else
            res.json(result);
    });
});


module.exports = router;
