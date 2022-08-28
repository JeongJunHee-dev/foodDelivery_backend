const { Mongoclient } = require("mongodb");

const url = "mongodb://localhost:27017";

const connection = () => {
    Mongoclient.connection(url).then(() => console.log("Connected")).catch(err => console.log ("Not Connected"));
};

module.exports = connection;