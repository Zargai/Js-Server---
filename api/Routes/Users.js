const express = require('express');
const route = express.Router();

route.get('/', (req, res, next) => {
    console.log("hello-users")
    res.send("hello-users")
});

module.exports = route;