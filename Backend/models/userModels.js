const mongoose = require('mongoose');
const userSchema=new mongoose.Schema({
    username:{
        type:String,
        required:[true,"USERNAME REQUIRED"]
    },
    email:{
        type:String,
        required:[true,"EMAIL REQUIRED"]
    },
    password:{
        type:String,
        required:[true,"PASSWORD REQUIRED"]
    }
},{timestamps:true})

const userModel=mongoose.model('User',userSchema);
module.exports=userModel;