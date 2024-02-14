const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const loginmodel = require('./models/login')

const app= express()
app.use(express.json())
app.use(cors())
  

mongoose.connect("mongodb://127.0.0.1:27017/signup");

app.post("/login",(req,res)=>{
    const{email,password}=req.body;
    loginmodel.findOne({email:email})
    .then(user=>{
        if(user){
        if(user.password === password){
            res.json("success")
        }else{
            res.json("pasward dosen't match");
        }
    }
    else{
        res.json("no record founded");
    }
    })
})

app.post("/register",(req,res) => {
loginmodel.create(req.body)
.then(login => res.json(login))
.catch(err =>res.json(err))

})

app.listen(3001,()=>{
    console.log("Listening.....")
})