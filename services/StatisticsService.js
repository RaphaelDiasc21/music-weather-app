const CityStatistics = require('../models/CityStatistics');
const temperatureUtil = require('../util/TemperatureUtil');

class StatisticsService{
    async createCityStatiscs(cityInfos){
       let cityBuilded =  CityStatistics.build(cityInfos);
       cityBuilded.save();
    }

    async getStatistics(){
        return await CityStatistics.findAll();
    }
}

module.exports = new StatisticsService();