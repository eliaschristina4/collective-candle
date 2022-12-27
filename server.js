// you need to npm start both backend AND frontend to get shit working wowza. must be running CONCURRENTLYYY
const express = require('express');
require('dotenv').config();

const PORT = process.env.PORT || 3000;
 
const app = express();

app.use(express.json());
app.use(express.static("../client/src"));

app.get('/', (req, res) => {
    res.json( {message: "idk what\'s happening here but ok"});
});

app.get('/api', (req, res) => {
    res.json( { message: 'Hello from the server!' } );
});

app.get('/express_backend', (req, res) => { //Line 9
    res.send({ express: 'YOUR EXPRESS BACKEND IS CONNECTED TO REACT' }); //Line 10
  });

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});