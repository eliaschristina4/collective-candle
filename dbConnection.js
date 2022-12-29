// MySQL Database access
// const mysql = require('mysql');

// Enabling use of and access to .env file
// require('dotenv').config();

// Details of the MySQL DB connection
// const conn = mysql.createConnection({
//   host: process.env.DB_HOST,
//   user: process.env.DB_USER,
//   password: process.env.DB_KEY,
//   database: process.env.DB,
//   multipleStatements: true
// });

// Connecting to the DB using the info above
// conn.connect(function(err) {
//   if (err) throw err;
//   console.log("Connected!");
// });

// Queries

// app.get('/db', (req, res) => {
//   connection.query("SELECT * FROM inventory;", (err, results, fields) => {
//     if(err) throw err;
//     res.send(results);
//     console.log(results[0]);
//   });
// });

// Test Query
// conn.query("SELECT * FROM inventory", (err, results, fields) => {
//   if (err) {
//       console.log(err)
//   } else {
//       console.log(results);
//       return results;
//   };
// }); // returns everything!!! from the inventory table in the products db

// Ending the connection
// conn.end();

// Exporting for use in other components
// module.exports = conn;