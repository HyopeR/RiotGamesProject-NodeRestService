const regions = require('../helpers/regionDb');
const regionsTag = Object.keys(regions);

module.exports = (req, res, next) => {

    const { region } = req.params;
    let regionUpperCase = region.toUpperCase();
    const regionController = regionsTag.includes(regionUpperCase);

    if(regionController){
        req.session['region'] = regions[regionUpperCase];
        next();
    }else{
        res.json({
            status: false,
            notification: 'Region not found.'
        })
    }
};
