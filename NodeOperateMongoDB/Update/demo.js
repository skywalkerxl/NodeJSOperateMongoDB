/**
 * Created by Lang on 2017/11/4.
 */
var MongoClient = require("mongodb").MongoClient;
var DB_URL = "mongodb://localhost:27017/homework";

MongoClient.connect(DB_URL, function (error, db) {
    console.log("Connection succcess!");
    updateData(db);
})

function updateData(db) {
    var coll = db.collection("insertDemo");
    var whereData = {
        name: "xulang"
    };

    var updateDat = {
        $set: {
            age: 100
        }
    };

    coll.update(whereData, updateDat, function (error, result) {
        if(error){
            console.log("Error:" + error);
        }else{
            console.log(result);
        }
        db.close();
    })
}