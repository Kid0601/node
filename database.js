// const mysql = require("mysql2");
// const pool = mysql.createPool({
//   host: "localhost",
//   user: "root",
//   password: "root",
//   database: "article_test",
// });
// module.exports = pool.promise();
const mysql = require("mysql2");

const connection = mysql.createConnection({
  host: "localhost",
  port: "3306",
  user: "admin",
  password: "123456",
  database: "test",
});

module.exports = connection;
