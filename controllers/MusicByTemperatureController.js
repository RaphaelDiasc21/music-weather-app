const MusicByTemperatureService = require('../services/MusicByTemperatureService');

class MusicByTemperatureController{

    constructor(){
        this.musicByTemperatureService = new MusicByTemperatureService();
    }

    getMusicByWeather = async (req,res) =>{
        let response = await this.musicByTemperatureService.getMusicByCityWeather(req.params.city); 
        res.status(response.status).json(response.body);
    }

}

module.exports = new MusicByTemperatureController();