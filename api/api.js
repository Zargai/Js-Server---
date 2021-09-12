const express = require('express');
const router = express.Router();

//Required api's 
const auth = require('./Routes/Auth')
const User = require('./Routes/User')

/*********Main Api**********/
router.use('/user',User);
router.use('/auth', auth);


module.exports = router;