const config = require("./package.json").projectConfig

module.exports = {
    mongoConfig: {
        connectionUrl: config.mongoConnectionUrl,
        database: "fooddelivery_db",
        collections: {
            USERS: "users",
        },
    },
    serverConfig: {
        ip: config.serverConfig,
        port: config.serverPort,
    }
};