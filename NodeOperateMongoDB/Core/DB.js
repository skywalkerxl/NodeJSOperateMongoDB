/**
 * Created by Lang on 2017/11/6.
 */
function dbConn() {
    var MongoClient = require("mongodb").MongoClient;
    var DB_URL = "mongodb://localhost:27017/homework";
    return DB_URL;
}
module.exports.dbConn = dbConn;