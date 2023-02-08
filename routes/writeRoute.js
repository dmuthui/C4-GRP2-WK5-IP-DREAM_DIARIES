const express = require('express');
const router = express.Router();

const Blog = require('../models/Blogs');

router.route('/')
    .get((req,res)=>{
        Blog.find({}).limit(3).exec((err,allBlogs)=>{
            if(err){console.log('ERROR ON WRITE SIDE OF FINDING BOOKS');}
            else{res.render('pages/write',{allBlogs})}
        })
    })

    .post((req,res)=>{
        let blog = {
            author:req.body.real,
            pseudo:req.body.pseudo,
            title:req.body.title,
            notes:req.body.notes
        }

        let newBlog = Blog(blog);
        
        newBlog.save();
        res.redirect('/articles')
    })

    

module.exports = router;