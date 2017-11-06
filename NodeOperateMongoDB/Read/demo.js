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

function selectData(db) {
    // 连接列表
    var collection = db.collection('insertDemo');

    // 查询数据
    var whereStr = {
        name: 'xulang'
    };

    // 模糊查询
    var fuzzyQuery = {
        name: /LiM/
    };

    // 结果排序
    var sorter = {
        score: 1
    };

    // 限制返回的字段
    var fields = {
        age: true,
        score: true,
        _id: false
    };

    // 条件查询


    collection.find(fuzzyQuery, {fields: fields}, function (error, cursor) {
        cursor = cursor.sort(sorter);
        //cursor = cursor.filter(fields);
        console.log("-------------- query start ---------------")
        cursor.each(function (error, doc) {
            if(error){
                console.log('Error:' + error)
            }else{
                if(doc){
                    console.log(doc);
                }else{
                    console.log("-------------- query end ---------------")
                }
            }
        });
    })
}
