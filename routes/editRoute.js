const express = require('express');
const router = express.Router();

const Blog = require('../models/Blogs')

router.route('/:id')
    .get((req,res)=>{

        Blog.findOneAndUpdate({_id:req.params.id}, req.body, {new:true,}, (err,toEdit)=>{
            if(err){console.log('ERROR FINDING BLOG ID: ${searchId}')}
            else{res.render('pages/edit', {editBlog:toEdit})}
        });

    })

    .post((req,res)=>{
        Blog.findByIdAndUpdate({_id:req.params.id},{notes: req.body.notes, title:req.body.title}, (err, update)=>{
            if (err) {console.log(err.message)}
            else{res.redirect('/articles') }
        })

    })



        

module.exports = router;

