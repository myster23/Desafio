const mysql = require('mysql2/promise');
require('dotenv').config();
 
const varhost = process.env.MYSQL_HOST
const varuser = process.env.MYSQL_USER
const varpassword = process.env.MYSQL_PASS
const vardb = process.env.MYSQL_DB
const varport = process.env.MYSQL_PORT
 
const connection = mysql.createConnection({
 host:varhost,
 user: varuser,
 password: varpassword,
 database: vardb,
 port: varport
});
module.exports = connection;
 