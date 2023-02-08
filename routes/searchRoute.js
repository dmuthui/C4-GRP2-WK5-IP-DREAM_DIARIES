const express = require('express');
const router = express.Router();

const Blog = require('../models/Blogs')


router.route('/')
    .get((req,res)=>{
        
        Blog.find({}).exec((err,reqQuery)=>{
 
            if(err){console.log('ERROR FINDING ALL BLOGS');}
            else{
                let filterparam = reqQuery.filter(query=>query.title  === req.query.search || query.pseudo === req.query.search|| query.id === req.query.search || query.author === req.query.search)
                res.render('pages/search', {searchBlog:filterparam})
            }
        
        })
      
    })
        

module.exports = router;