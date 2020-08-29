const fetch = require('node-fetch');
const urlApiKey = '?api_key='+process.env.API_KEY;
let League = function(){};

League.getLeagueSummoner = async(regionUrl, summonerId, result) => {
    const request = await fetch(
        regionUrl + '/lol/league/v4/entries/by-summoner/' + summonerId + urlApiKey,
        {
            method: 'GET',
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json',
                'X-Riot-Token': process.env.API_KEY
            }
        })
        .then(res => res.json())
        .then(json => result(null, json))
        .catch(err => result(null, err));

};

module.exports= League;
