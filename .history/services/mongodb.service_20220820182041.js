const { MongoClient } = require("mongodb");
const { mongoConfig } = require("../config");

class MongoDB {
    static connectToMongoDB = () => {
        MongoClient.connect(MongoClient.connectionUrl).then((connection) => this.db = connection.db(mongoConfig.database));
    };
}

MongoDB.db = null ;

module.exports = connection;