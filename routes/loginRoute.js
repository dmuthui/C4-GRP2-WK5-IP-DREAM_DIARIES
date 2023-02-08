const express  = require ('express');
const router = express.Router();
const User = require('../models/Users');

router.route('/')
    .get((req,res)=>{
        res.render('pages/login')
    })

    .post((req,res)=>{
        const myEmail = req.body.email;
        const password = req.body.password;

        User.findOne({emailAddress:myEmail}, (err,result)=>{
            if(err){console.log(err.message)}
            else{
                if(result.password === password){res.redirect('/articles')}
                else{res.send('Wrong Password'); console.log(result)}
            }
        })
    })

module.exports = router;

