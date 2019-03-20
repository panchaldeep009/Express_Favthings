var config = require('../config');
var mysql = require('mysql');

const connect = mysql.createConnection(config.sql)

module.exports = connect;