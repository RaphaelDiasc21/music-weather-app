const StatisticsService = require("../services/StatisticsService");

class StatisticsController{
    async getStatistics(req,res){
        let statistics = await StatisticsService.getStatistics();
        return res.status(200).json(statistics);
    }
}

module.exports = new StatisticsController();