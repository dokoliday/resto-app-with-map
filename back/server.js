const express = require("express");
const app = express();
const port = 1080;
const bodyParser = require("body-parser");
const cors = require('cors');

const restaurants = require('./restaurants');
//const users = require('./users');

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({
    extended: true
}))

app.use(cors())


app.use('/restaurants', restaurants);
//app.use('/users', users);

app.listen(port, err => {
    if(err){
        throw new Error(err);
    }
    console.log(`${port}`);
})