
/**
 * Created by Lang on 2017/11/4.
 */
var MongoDBClient = require("mongodb").MongoClient;
var DB_URL = "mongodb://localhost:27017/homework";

MongoDBClient.connect(DB_URL, function (error, db) {
    console.log("Connection Success!");
    console.log("----------- Connection success -----------");
    deleteData(db);
})

function deleteData(db) {
    var coll = db.collection("insertDemo");
    var data = {
        name: {
            first: 'lang'
        }
    };

    coll.remove(data, function (error, result){
        if(error){
            console.log("Error:" + error);
        }else{
            console.log(result.result.n)
        }
        db.close();
        console.log("------------ Connection Close -------------")
    })
}