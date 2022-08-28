const { MongoClient } = require("mongodb");

const url = "mongodb://localhost:27017";

class MongoDB {
  static connectToMongoDB = () => {
    MongoClient.connect(mongoConfig.connectionUrl)
      .then((connection) => {
        console.log("MongoDB Connected");
        this.db = connection.db(mongoConfig.database);
      })
      .catch((error) => console.log(`MongoDB not Connected : ${error}`));
  };
}



module.exports = MongoDB;