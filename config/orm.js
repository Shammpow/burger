var connection = require("./connection.js");

var orm = {
    selectAll: function(tableInput, cb) {
        var queryString = "SELECT * FROM ??";
        connection.query(queryString, [tableInput], function(err, result) {
            if (err) throw err;
            cb(result);
        });
    },
    insertOne: function(tableInput, colToInput, valOfCol, cb) {
        var queryString = `INSERT INTO ?? (??) VALUES ("?")`;
        connection.query(queryString, [tableInput, colToInput, valOfCol], function(err, result) {
            if (err) throw err;
            cb(result);
        });
    },
    updateOne: function(tableInput, colToInput, valOfCol, primKey, cb) {
        var queryString = `UPDATE ?? SET ?? = ? WHERE ??`;
        connection.query(queryString, [tableInput, colToInput, valOfCol, primKey], function(err, result) {
            if (err) throw err;
            cb(result);
        });
    }
};

module.exports = orm;