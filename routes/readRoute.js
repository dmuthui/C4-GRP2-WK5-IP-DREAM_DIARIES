const express = require('express');
const router = express.Router();

const Blog = require('../models/Blogs')

router.route('/:id')
    .get((req,res)=>{
        var searchId = req.params.id; 
        Blog.findById(searchId, (err,searchResult)=>{
            if(err){console.log('ERROR FINDING BLOG ID')}
            else{res.render('pages/read', {readBlog:searchResult})}
        });

    })

router.route('/edit/:id')
    .get((req,res)=>{
        var searchId = req.params.id; 
        Blog.findById(searchId, (err,searchResult)=>{
            if(err){console.log('ERROR FINDING BLOG ID: ${searchId}')}
            else{res.render('pages/edit', {readBlog:searchResult})}
        });

    })
    
    .put((req,res)=>{
        
        Blog.findByIdAndUpdate({id: searchId},{notes: req.body.notes, title:req.body.title}, {new:true}, (err, update)=>{
            if (err) {console.log(err.message)}
            else{res.render('pages/edit')}
        })

    })



        

module.exports = router;

