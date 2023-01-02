// TRUCO: You need to npm start both backend AND frontend to get shit working wowza. must be running CONCURRENTLYYY

// Creating Express app
const express = require('express');
const app = express();

// Server port
const PORT = process.env.PORT || 3000;

// Enabling support to the Cross-Origin Resource Sharing protocol
const cors = require('cors');
app.use(cors());

// Enabling use of and access to .env file
require('dotenv').config();

// Not sure exactly lol
app.use(express.json());
app.use(express.static("../client/src"));

// MySQL Database access
const mysql = require('mysql');

// Details of the MySQL DB connection
const conn = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_KEY,
    database: process.env.DB,
    multipleStatements: true
  });

// Connecting to the DB using the info above
conn.connect(function(err) {
    if (err) throw err;
    console.log("Connected to database");
});
  
// Queries  
app.get('/db', (req, res) => {
    conn.query("SELECT * FROM inventory;", (err, results, fields) => {
        if(err) throw err;
        res.send(results);
        // console.log(results);
    });
}); // could break down into separate queries for individual rows or columns instead of grabbing the info all at once. 
// would that make it easier to plug into react components? I'm not so sure

// Ending the database connection
// conn.end(() => {
//     console.log('Database connection ended');
// });

// Listening on the pre-established server port (above)
app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});




// Express Routes - TEST

// app.get('/api', (req, res) => {
//     res.json( { message: 'Hello from the server!' } );
// });

// app.get('/express_backend', (req, res) => { //Line 9
//     res.send({ express: 'YOUR EXPRESS BACKEND IS CONNECTED TO REACT' }); //Line 10
//   });