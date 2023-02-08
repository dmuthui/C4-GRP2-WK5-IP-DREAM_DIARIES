const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    firstName:{type:String,  required:true},
    secondName:{type:String,  required:true},
    emailAddress:{type:String, unique:true, required:true},
    password:{type:String, required: true},
    confirmPass:{type:String, required: true},
    timmestamp: {type:Date, default: Date.now, immutable:true}

});

module.exports = mongoose.model('User',userSchema);