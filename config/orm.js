var connection = require("./connection.js");

var orm = {
    selectAll: function(tableInput) {
        var queryString = "SELECT * FROM ??";
        connection.query(queryString, [tableInput], function(err, result) {
            if (err) throw err;
            console.log(result);
        });
    },
    insertOne: function(tableInput, colToInput, valOfCol) {
        var queryString = `INSERT INTO ?? (??) VALUES ("?")`;
        connection.query(queryString, [tableInput, colToInput, valOfCol], function(err, result) {
            if (err) throw err;
            console.log(result);
        });
    },
    updateOne: function(tableInput, colToInput, valOfCol, primKey) {
        var queryString = `UPDATE ?? SET ?? = ? WHERE ??`;
        connection.query(queryString, [tableInput, colToInput, valOfCol, primKey], function(err, result) {
            if (err) throw err;
            console.log(result);
        });
    }
};

module.exports = orm;