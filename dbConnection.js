const mysql = require('mysql');
require('dotenv').config();

const conn = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_KEY,
  database: process.env.DB,
  multipleStatements: true
});

conn.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
});

conn.query("SELECT * FROM inventory", (err, results, fields) => {
  if (err) {
      console.log(err)
  } else {
      console.log(results);
      return results;
  };
}); // returns everything!!! from the inventory table in the products db

conn.end();

// module.exports = conn;