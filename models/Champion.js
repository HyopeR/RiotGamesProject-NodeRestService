const fetch = require('node-fetch');
const urlApiKey = '?api_key='+process.env.API_KEY;
let Champion = function(){};

Champion.getFreeRotation = async(regionUrl, result) => {
    const request = await fetch(
        regionUrl + '/lol/platform/v3/champion-rotations' + urlApiKey,
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

module.exports= Champion;
