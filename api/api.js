const express = require('express');
const router = express.Router();
// const userController = require('../Lib/userController');
// const authController = require('../Lib/authController');

//Required api's 
const User = require('./Routes/Users')
const auth = require('./Routes/Auth')
//Main API's Component define Here
 router.use('/user',User);
router.use('/auth', auth);

// router.get('/login', (req,res,next)=>{
//     console.log("hello")
//     res.send("hello")
// });

// router.post('/login', authController.login);
// router.post('/signup', authController.signup);

// // Protect all routes after this middleware
// router.use(authController.protect);

// router.delete('/deleteMe', userController.deleteMe);

// // Only admin have permission to access for the below APIs 
// router.use(authController.restrictTo('admin'));

// router
//     .route('/')
//     .get(userController.getAllUsers);


// router
//     .route('/:id')
//     .get(userController.getUser)
//     .patch(userController.updateUser)
//     .delete(userController.deleteUser);

module.exports = router;