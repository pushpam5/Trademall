const mongoose=require('../server/server')
const express = require('express')
const router=express.Router();
const bodyParser=require('body-parser')
const {States}=require('../models/states')
const {Cities}=require('../models/cities')
var app=express();

mongoose.set('useFindAndModify', false);
app.use(bodyParser.json());


router.post('/',async(req,res)=>{
    console.log(req.body.id)
    const states=await States
                .findById(req.body.id)
              
    console.log("Fetching Cities...")
    console.log(states.state_id)
    //res.send(states)
    const cities= await Cities.find({state_id: states.state_id}).sort('name')
    //console.log(cities)
    res.send(cities)
            })

module.exports=router;