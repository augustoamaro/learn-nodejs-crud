'use strict';

const mysql = require('mysql');

const dbConnection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'crud_example_db'
});

dbConnection.connect(function (err) {
    if (err) throw err;
    console.log("Database Connected");
});

module.exports = dbConnection;