const axios = require('axios');

const requestUtil = async (url,method,options, body = null) =>{
    switch(method){
        case "GET":
            try{
                return await axios.get(url,options);
            }catch(e){
                return e;
            }
            
        break;
        case "POST":
            return await axios.post(url,body,options);
        break;
    }
}

module.exports = requestUtil;