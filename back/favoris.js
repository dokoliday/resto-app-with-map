const connection = require('./conf.js');
const express = require('express');
const router = express.Router();


router.post('/favoris', (req, res) => {
    const { restaurant, user } = req.body;
    connection.query(`INSERT INTO favoris VALUES (null,?,?);`, [restaurant, user], (err, results) => {
        if (err) {
            res.status(500).send(err)
            console.log(req.body)
        } else {
            res.status(200).json(results);
        }
    })
})






module.exports = router;