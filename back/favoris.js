const connection = require('./conf.js');
const express = require('express');
const router = express.Router();


router.get('/:id', (req, res) => {
    const {id} = req.params
    connection.query('SELECT * FROM favoris INNER JOIN restaurants_cleaned ON favoris.id_restaurant = restaurants_cleaned.id  WHERE id_user=?',id ,(err, results) => {
        if(err){
            res.status(500).send(err)
        } else {
            res.status(200).json(results);
        }
    })
})






module.exports = router;