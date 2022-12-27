const express = require('express');

const conn = require('./dbConnection');

const Router = express.Router();

Router.get("/", (req, res) => {
    conn.query("SELECT * FROM productList", (err, results) => {
        if (err) {
            console.log(err)
        } else {
            console.log(results);
        };
    })
});