const connection = require('./conf.js');
const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    connection.query('SELECT * FROM restaurants_cleaned', (err, results) => {
        if(err){
            res.status(500).send(err)
        } else {
            res.status(200).json(results);
        }
    })
})

module.exports = router;