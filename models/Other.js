const fetch = require('node-fetch');
let Other = function(){};

Other.getLanguages = async(result) => {
    const request = await fetch(
        'https://ddragon.leagueoflegends.com/cdn/languages.json',
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


Other.getSeasons = async(result) => {
    const request = await fetch(
        'http://static.developer.riotgames.com/docs/lol/seasons.json',
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

Other.getQueues = async(result) => {
    const request = await fetch(
        'http://static.developer.riotgames.com/docs/lol/queues.json',
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

module.exports= Other;
