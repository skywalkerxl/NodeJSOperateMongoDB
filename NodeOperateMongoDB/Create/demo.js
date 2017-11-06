/**
 * Created by Lang on 2017/11/4.
 */
var MongoClient = require("mongodb").MongoClient;
var DB_URL = "mongodb://localhost:27017/homework";


MongoClient.connect(DB_URL, function (error, db) {
    console.log("----------- Connection success -----------");
    insertData(db);
})

function insertData(db) {
    var insertDemo = db.collection('insertDemo');

    var data1 = {
        name: "LiMing_1",
        age: 18,
        addr: "anqing",
        score: 99,
        addTime: new Date()
    };
    var data2 = {
        name: "LiMing_2",
        age: 19,
        addr: "anqing",
        score: 98,
        addTime: new Date()
    };
    var data3 = {
        name: "LiMing_3",
        age: 20,
        addr: "anqing",
        score: 97,
        addTime: new Date()
    };
    var data4 = {
        name: "LiMing_4",
        age: 21,
        addr: "anqing",
        score: 96,
        addTime: new Date()
    };
    var data5 = {
        name: "LiMing_5",
        age: 22,
        addr: "anqing",
        score: 95,
        addTime: new Date()
    };
    var data6 = {
        name: "LiMing_6",
        age: 23,
        addr: "anqing",
        score: 94,
        addTime: new Date()
    };

    var insertData = [
        {
            name: "LiMing_1",
            age: 18,
            addr: "anqing",
            score: 99,
            addTime: new Date()
        },
        {
            name: "LiMing_2",
            age: 19,
            addr: "anqing",
            score: 98,
            addTime: new Date()
        },
        {
            name: "LiMing_3",
            age: 20,
            addr: "anqing",
            score: 97,
            addTime: new Date()
        },
        {
            name: "LiMing_4",
            age: 21,
            addr: "anqing",
            score: 96,
            addTime: new Date()
        },
        {
            name: "LiMing_5",
            age: 22,
            addr: "anqing",
            score: 95,
            addTime: new Date()
        },
        {
            name: "LiMing_6",
            age: 23,
            addr: "anqing",
            score: 94,
            addTime: new Date()
        },
        {
            name: "LiMing_7",
            age: 24,
            addr: "anqing",
            score: 93,
            addTime: new Date()
        },

    ]
    
    insertDemo.insert(insertData, function (error, result) {
        if(error){
            console.log("Error:" + error);
        }else{
            console.log(result.result.n) // 这里返回操作的结果数目
        }
        db.close();
        console.log("------------ Connection Close -------------")
    });
}
