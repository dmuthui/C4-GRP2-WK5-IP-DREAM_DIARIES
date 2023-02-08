const express = require ('express');
const router = express.Router();

const User = require('../models/Users')


router.route('/')
    .get((req,res)=>{
        res.render('pages/signup')
    })

    .post((req,res)=>{
        let user = {
            firstName:req.body.firstName,
            secondName: req.body.secondName,
            emailAddress: req.body.emailAddress,
            password: req.body.password,
            confirmPass: req.body.confirmPass
        }

        let newUser = new User(user);

        if (req.body.password === req.body.confirmPass){
            newUser.save();
            res.redirect('/')
        }
        else{
            console.log('NOP');
        }

    })

module.exports=router;