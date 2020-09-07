const mongo = require('mongodb');

class MongoConnection{
    static async getConnection(){
        let MongoClient = mongo.MongoClient;

        return await MongoClient.connect(
            "mongodb://weatherapi_user:weatherapi_password@mongo:27017/weatherapi-container?authSource=admin"
        )
    }
}

module.exports = MongoConnection;
