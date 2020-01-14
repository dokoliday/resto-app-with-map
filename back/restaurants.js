const connection = require('./conf.js');
const express = require('express');
const router = express.Router();


router.get('/allRestaurants', (req, res) => {
    connection.query('SELECT * FROM restaurants_cleaned ', (err, results) => {
        if(err){
            res.status(500).send(err)
        } else {
            res.status(200).json(results);
        }
    })
})

router.get('/allRestaurants/restaurantByArea/:numero', (req, res) => {
    connection.query('SELECT * FROM restaurants_cleaned INNER JOIN areas_cleaned ON restaurants_cleaned.id_area = areas_cleaned.id WHERE areas_cleaned.id=?',req.params.numero, (err, results) => {
        if(err){
            res.status(500).send(err)
        } else {
            res.status(200).json(results);
        }
    })
})

router.get('/allRestaurants/restaurantByName/:name_restaurant', (req, res) => {
    connection.query(`SELECT * FROM restaurants_cleaned  WHERE restaurants_cleaned.name =? `,req.params.name_restaurant.replace(/'/i, '+') , (err, results) => {
        if(err){
            res.status(500).send(err)
        } else {
            res.status(200).json(results);
        }
    })
})


router.get('/allAreas', (req, res) => {
    connection.query('SELECT * FROM areas_cleaned', (err, results) => {
        if(err){
            res.status(500).send(err)
        } else {
            res.status(200).json(results);
        }
    })
})


module.exports = router;