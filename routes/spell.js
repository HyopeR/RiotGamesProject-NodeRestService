const express = require('express');
const router = express.Router();

const Spell = require('../models/Spell');

/* Get All Champions Data */
router.get('/:version/:language', (req, res, next) => {
    const { version, language } = req.params;

    Spell.getSpells(version, language, (error, result) => {
        if(error)
            res.json(error);
        else
            res.json(result);
    });
});
module.exports = router;
