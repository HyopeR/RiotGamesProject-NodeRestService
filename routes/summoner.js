const express = require('express');
const router = express.Router();

const Summoner = require('../models/Summoner');

/* Return Summoner Data -> Paramater: summonerName */
router.get('/:summonerName', (req, res, next) => {
  const { summonerName } = req.params;

  Summoner.getSummoner(req.session.region, summonerName, (error, result) => {
    if(error)
      res.json(error);
    else
      res.json(result);
  });
});

module.exports = router;
