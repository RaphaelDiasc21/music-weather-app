const mongoClient = require('../database/mongoClient');
const temperatureUtil = require('../util/TemperatureUtil');

class StatisticsService{
    async createCityStatiscs(cityInfos){
        let connect = await mongoClient.getConnection();

        await connect.db('statistics')
               .collection('city')
               .insert(cityInfos);

    }

    async getStatistics(){
        let connection = await mongoClient.getConnection();
        return connection.db('statistics')
                               .collection('city')
                               .find()
                               .toArray();
    }
}

module.exports = new StatisticsService();