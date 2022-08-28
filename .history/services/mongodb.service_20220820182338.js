const { MongoClient } = require("mongodb");
const { mongoConfig } = require("../config");

class MongoDB {
    static connectToMongoDB = () => {
        MongoClient.connect(MongoClient.connectionUrl).then((connection) => {
            console.log("MongoDB Connection")
            this.db = connection.db(mongoConfig.database}));
    };
}

MongoDB.db = null;

module.exports = connection;