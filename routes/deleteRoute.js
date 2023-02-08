const express = require('express');
const router = express.Router();

const Blog = require('../models/Blogs')

router.route('/:id')
    .get((req,res)=>{
        var searchId = req.params.id   
        Blog.findById(searchId, (err,searchResult)=>{
            if(err){console.log('ERROR FINDING BLOG ID')}
            else{searchResult.remove(); res.redirect('/articles')}
        });

    })

module.exports = router;