var { sql } = require('../config');
var mysql = require('mysql');

const connect = mysql.createConnection(sql)

module.exports = connect;