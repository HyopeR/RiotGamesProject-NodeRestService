const express = require('express');
const router = express.Router();

const Item = require('../models/Item');

/* Get All Champions Data */
router.get('/:version/:language', (req, res, next) => {
    const { version, language } = req.params;

    Item.getItems(version, language, (error, result) => {
        if(error)
            res.json(error);
        else
            res.json(result);
    });
});
module.exports = router;
