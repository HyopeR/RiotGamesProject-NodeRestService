const fetch = require('node-fetch');
const urlApiKey = '?api_key='+process.env.API_KEY;
let Match = function(){};

Match.getMatchHistory = async(regionUrl, accountId, result) => {
    const request = await fetch(
        regionUrl + '/lol/match/v4/matchlists/by-account/' + accountId + urlApiKey,
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

Match.getMatchDetail = async(regionUrl, matchId, result) => {
    const request = await fetch(
        regionUrl + '/lol/match/v4/matches/' + matchId + urlApiKey,
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

module.exports= Match;
