const requestUtil = require('./RequestUtil');
const temperatureUtil = require('./TemperatureUtil');
const formatDateUtil = require('./FormatDateUtil');

exports.cityInfosBuilder = (cityInfosRaw,city) => {
    let temperatureConverted = temperatureUtil.convertKelvinToCelciusUtil(cityInfosRaw["temp"]);
    let sensationConverted = temperatureUtil.convertKelvinToCelciusUtil(cityInfosRaw["feels_like"]);
    let max = temperatureUtil.convertKelvinToCelciusUtil(cityInfosRaw["temp_min"]);
    let min = temperatureUtil.convertKelvinToCelciusUtil(cityInfosRaw["temp_max"]);
    let humidity = cityInfosRaw["humidity"];

    let dateInfo = formatDateUtil.formatDateByNow();

    return {
        city:city,
        temperature:temperatureConverted,
        sensation:sensationConverted,
        max:max,
        min:min,
        humidity:humidity,
        date:dateInfo.date,
        hour:dateInfo.hour
    }
}

exports.cityRequest = async (url,method,options) =>{
    let cityRequest = await requestUtil(url,method,options);

    if(cityRequest["response"]){
        throw "Nome de cidade invalido !";
    }

    return cityRequest["data"]["main"];
} 
