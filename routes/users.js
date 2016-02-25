var express = require('express');
var User = require('../models/User');
var router = express.Router();

// GET controllers
router.get('/', function (req, res, next) {

    User.findAll()
        .then(function (users) {
            // Render or respond json
        })
        .catch(function (err) {
            // Handle error
        });

});

router.get('/:username', function (req, res, next) {

    User.findByID( req.params.username )
        .then(function (user) {
            // Render or respond json
        })
        .catch(function (err) {
            // Handle error
        });

});

// POST controllers
router.post('/', function (req, res, next) {

    User.create(req.body)
        .then(function (user) {
            res.status(201);
            // Render or respond json
        })
        .catch(function (err) {
            res.status(409);
            // Handle error
        });

});

// PUT controllers
router.put('/:username', function(req, res, next){

    User.save({
        username: req.params.username,
        toUpdate: req.body
    })
    .then(function (user) {
        // Render or respond json
    })
    .catch(function (err) {
        // Handle error
    })
});

// DELETE controllers
router.delete('/:username', function (req, res, next) {

    User.destroy( req.params.username )
    .then(function () {
        res.sendStatus(204);
    })
    .catch(function (err) {
        // Handle error
    });

});

module.exports = router;