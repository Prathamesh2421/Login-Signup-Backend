const mongoose = require('mongoose')


const loginSchema= new mongoose.Schema({
    name:String,
    email:String,
    password:String
})

const loginmodel = mongoose.model("login ",loginSchema);

module.exports = loginmodel