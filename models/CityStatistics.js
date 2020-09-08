let connection = require("../database/Database");
const { DataTypes} = require(`sequelize`);

let CityStatistics = connection.define('post',{
    id:{
        type:DataTypes.INTEGER,
        primaryKey:true,
        autoIncrement:true
    },
    city:{
        type:DataTypes.STRING,
    },
    temperature:{
        type:DataTypes.FLOAT
    },
    sensation:{
        type:DataTypes.FLOAT
    },
    max:{
        type:DataTypes.STRING
    },
    min:{
        type:DataTypes.STRING
    },
    humidity:{
        type:DataTypes.INTEGER
    },
    date:{
        type:DataTypes.STRING
    },
    hour:{
        type:DataTypes.STRING
    }
},{
    timestamps:false
});

module.exports = CityStatistics;