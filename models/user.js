const Joi =require('joi')
const mongoose=require('mongoose');


const User =mongoose.model('User',new mongoose.Schema({

    name:{
        type:String,
        required:true,
        minlength:5,
        maxlength:50
    },
     email:{
        type:String,
        required:true,
        minlength:5,
        maxlength:250,
        unique:true
    },
     password:{
        type:String,
        required:true,
        minlength:5,
        maxlength:250,
        
    }
}))
module.exports.User=User
//validate  user 

