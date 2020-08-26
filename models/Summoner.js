const fetch = require('node-fetch');
const urlApiKey = '?api_key='+process.env.API_KEY;
let Summoner = function(){};

Summoner.getSummoner = async(regionUrl, summonerName, result) => {
    const request = await fetch(
        regionUrl + '/lol/summoner/v4/summoners/by-name/' + summonerName + urlApiKey,
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

Summoner.getMatchHistory = async(regionUrl, accountId, result) => {
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

module.exports= Summoner;
