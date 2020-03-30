console.log("Heloo world.....");

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const morgan = require('morgan');

//Innitialising the app
const app = express();


app.use(morgan('combine'));
app.use(bodyParser.json());
app.use(cors()); //Enables any client around the world to hit the server(security risk to have it enabled)

app.get('/status', (req, res) => {
    res.send({
        message: "Hello World"
    });
});


app.listen(process.env.PORT || 8081);








