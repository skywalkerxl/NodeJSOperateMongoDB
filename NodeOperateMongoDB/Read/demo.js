/**
 * Created by Lang on 2017/11/4.
 */
var mongodb = require('mongodb');
var MongoClient = mongodb.MongoClient;
var DB_CONN_STR = 'mongodb://localhost:27017/homework';


MongoClient.connect(DB_CONN_STR, function (err, db) {
    console.log("----------- Connection success -----------");
    selectData(db, function (result) {
        console.log(result);
        db.close();
        console.log("------------ Connection Close -------------")
    })
})

var selectData = function (db, callback) {
    // 连接列表
    var collection = db.collection('insertDemo');

    // 查询数据
    var whereStr = {
        name: 'xulang'
    }

    // 模糊查询
    var fuzzyQuery = {
        name: /LiM/
    }

    // 条件查询


    collection.find(fuzzyQuery, function (error, cursor) {
        cursor.each(function (error, doc) {
            if(error){
                console.log('Error:' + error)
            }else{
                if(doc){
                    if(doc.score){
                        console.log("score:" + doc.score);
                    }
                }else{
                    console.log("-------------- query over ---------------")
                }
            }
        });
    })
}
