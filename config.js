var env = process.env.NODE_ENV || "development",
    dbConnection;

// Set DB url based on environment
if (env === "development") {
    
} else if (env === "production") {
    
}

module.exports.dbConnection = dbConnection
module.exports.sessionSecret = "this-is-super-secret"