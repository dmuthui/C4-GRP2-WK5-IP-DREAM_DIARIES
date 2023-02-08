const mongoose = require('mongoose');

let blogSchema = new mongoose.Schema({
    author:{type:String, required:true},
    pseudo: {type:String,required:true},
    title: {type:String,required:true},
    notes: {type:String,required:true},
    timestamp: {type:Date,default: Date.now}

});

module.exports = mongoose.model('Blog', blogSchema);