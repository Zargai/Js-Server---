const express = require('express');
const route = express.Router();

route.get('/', (req, res, next) => {
    console.log("hello-Auth")
    res.send("hello-Auth")
});

module.exports = route;