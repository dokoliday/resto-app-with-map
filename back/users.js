const connection = require('./conf.js');
const express = require('express');
const router = express.Router();


router.post('/inscription', (req, res) => {
    const { pseudo, email } = req.body;

    connection.query(`INSERT INTO users VALUES (null,?,?);`, [pseudo, email], (err, results) => {
        if (err) {
            res.status(500).send(err)
            console.log(req.body)
        } else {
            res.status(200).json(results);
        }
    })
})

router.post('/identification', (req, res) => {
    const { email } = req.body;
    connection.query(`SELECT * FROM users WHERE email=? `, email, (err, results) => {
        if (err) {
            res.status(500).send(err)
            console.log(req.body)
        } else {
            res.status(200).json(results);
        }
    })
})







module.exports = router;