const fetch = require('node-fetch');
const urlApiKey = '?api_key='+process.env.API_KEY;
const regions = require('../helpers/regionDb');

let Region = function(){};

Region.getAllRegions = async(result) => {
    result(null, regions);
};

Region.getRegionStatus = async(regionUrl, result) => {
    const request = await fetch(
        regionUrl + '/lol/status/v3/shard-data' + urlApiKey,
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

module.exports= Region;
