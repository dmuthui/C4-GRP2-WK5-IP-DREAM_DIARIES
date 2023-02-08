const express = require('express');
const router = express.Router();

const Blog = require('../models/Blogs');

router.route('/')

    .get((req,res)=>{
        Blog.find({}).limit(6).exec((err,allBlogs)=>{
            if(err){console.log('ERROR ON WRITE SIDE OF FINDING BOOKS');}
            else{res.render('pages/articles',{allBlogs})}
        });
    })

    .post((req,res)=>{
       
        let blog = {
            author:req.body.real,
            pseudo:req.body.nickname,
            title:req.body.topic,
            notes:req.body.dream
        }
        let newBlog = Blog(blog);
        newBlog.save();
        
        res.redirect('/articles');
    })

module.exports = router;
