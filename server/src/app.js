const express = require('express');
const bodyParser = require('body-parser');//Process json data very easily
const cors = require('cors');
const morgan = require('morgan');
//Innitialising the app
const app = express();


app.use(morgan('combined'));//When an end point is hit a log of what device hit the end point  prints to the console.
app.use(bodyParser.json());
app.use(cors()); //Enables any client around the world to hit the server(security risk to have it enabled)

app.get('/register', (req, res) => {
    res.send({
        message: `Hello ${req.body.email}! Your user was registered have fun`
    });
});

// app.listen(process.env.PORT || 8081);
app.listen(8081, () => {
    console.log(``);
});







