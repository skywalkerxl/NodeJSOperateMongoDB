/**
 * Created by Lang on 2017/11/6.
 */
var module = require("../Core/dbConn");

MongoClient.connect(DB_CONN_STR, function (err, db) {
    console.log("----------- Connection success -----------");
    db.close();
})

/*function largeSmallVowels(collection) {
    var match = {
        $match: {
            first: {
                $in: ['a', 'e', 'i', 'o', 'u']
            }
        }
    };
    var group = {
        $group: {
            _id: $first,
            largest: {$max: $size},
            smallest: {$min: $size},
            total: {$sum: 1}
        }
    };
    var sort = {
        $sort: {
            first: 1
        }
    };
    collection.aggregate([match, group, sort], function (err, result) {
        display
    })
}

function displayAggregate() {

}*/
