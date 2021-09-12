const express = require('express');
const route = express.Router();
const UserServices = require('../../Services/userService')
/***************Routes************/

//Add 
route.post('/add',async(req,res,next)=>{
    try {
        const { Record } = await UserServices.Add(req.body)
        console.log("routesrecord==>", Record)
        return res.status(201).json({ Record })
    } catch (e) {
        console.log(e);
        return next(e)
    }
});

//Update
route.post('/update', async (req, res, next) => {
    try {
        const { success,message } = await UserServices.Update(req.body)
        return res.status(200).json({ message, success })
    } catch (e) {
        console.log(e);
        return next(e)
    }
});

//Delete
route.post('/delete', async (req, res, next) => {
    try {
        const { success, message } = await UserServices.Delete(req.body)
        return res.status(200).json({ message, success })
    } catch (e) {
        console.log(e);
        return next(e)
    }
});

//Get
route.post('/get', async (req, res, next) => {
    try {
        const { Record } = await UserServices.GetOne(req.body)
        return res.status(200).json({ Record })
    } catch (e) {
        console.log(e);
        return next(e)
    }
});

//GetAll
route.get('/gets', async (req, res, next) => {
    try {
        const { Record } = await UserServices.GetAll()
        return res.status(200).json({ Record })
    } catch (e) {
        console.log(e);
        return next(e)
    }
});

module.exports = route;