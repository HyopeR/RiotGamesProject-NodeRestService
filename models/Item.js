const fetch = require('node-fetch');
const urlApiKey = '?api_key='+process.env.API_KEY;
let Item = function(){};

Item.getItems = async(version, language, result) => {
    const request = await fetch(
        'http://ddragon.leagueoflegends.com/cdn/' + version + '/data/' + language + '/item.json',
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

module.exports= Item;
