
const cityUtil = require('../util/CityUtil');
const musicUtil = require('../util/MusicUtil');
const temperatureUtil = require('../util/TemperatureUtil');
const statisticsService = require('./StatisticsService');

class MusicByTemperatureService{

    async getMusicByCityWeather(city){
        try{
            let cityInfos = await this.getTemperatureByCity(city);
            statisticsService.createCityStatiscs(cityInfos);
            let playlist = await this.getMusicByTemperature(cityInfos["temperature"]);

            return {
                status:200,
                body:{
                    playlist:playlist
                }
            }
        }catch(e){
            return {
                status:404,
                body:{message:e}
            };
        }

    }

   async  getTemperatureByCity(city){
        let options = {headers:{'Content-type':'application/json'} };
        let url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=353810d6eeedff69ab021b5cfcfb4c4d`;
        let method = "GET";

        try{
            let cityResponse = await cityUtil.cityRequest(url,method,options);
            return cityUtil.cityInfosBuilder(cityResponse,city);
        }catch(e){
            throw e;
        } 
    }

     async getMusicByTemperature(temperature){
        if(temperature < 10){
            let musics = await musicUtil.getMusicByCategory("classic");
            return{
                genero:"classic",
                musicas:musics
            }
        }
        if(temperature >= 10 && temperature <= 25){
            let musics = await musicUtil.getMusicByCategory("rock");
            return{
                genero:"rock",
                musicas:musics
            }
        } 

        let musics = await musicUtil.getMusicByCategory("pop");
        return{
            genero:"pop",
            musicas:musics
        }

    }
}

module.exports = MusicByTemperatureService;