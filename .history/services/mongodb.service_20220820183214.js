const { MongoClient } = require("mongodb");
const { mongoConfig } = require("../config");

class MongoDB {
    static connectToMongoDB = () => {
        MongoClient.connect(mongoClient.connectionUrl).then((connection) => {
            console.log("MongoDB Connection")
            this.db = connection.db(mongoConfig.database);})
            .catch (error => console.log(`몽고디비 불 접속: ${error}`));
    };
}

MongoDB.db = null;

module.exports = MongoDB;