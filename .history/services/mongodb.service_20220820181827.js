const { MongoClient } = require("mongodb");
const { mongoConfig } = require("../config");

class MongoDB {
    static connectToMongoDB = () => {
        MongoClient.connect()
    }
}

MongoDB.db = null 

module.exports = connection;