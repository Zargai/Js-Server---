const express = require('express');
const route = express.Router();

route.get('/', (req, res, next) => {
    console.log("hello-auth")
    res.send("hello-auth")
});
route.get('/try', (req, res, next) => {
    console.log("hello-auth-try")
    res.send("hello-auth-try")
});

module.exports = route;