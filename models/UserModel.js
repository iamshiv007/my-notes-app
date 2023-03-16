const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
    fullName:{
        type:String,
        require:true
    },
    email:{
        type:String,
        require:true,
        unique:true
        // validate:[validator.isEmail, 'Please Provide a Valid Email Address']
    },
    password:{
        type:String,
        require:true
    },
    mobile:{
        type:Number
    },
    address:{
        type:String
    }
})

module.exports = mongoose.model('User', UserSchema)
