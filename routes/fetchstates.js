const mongoose=require('../server/server')
const express = require('express')
const router=express.Router();
const bodyParser=require('body-parser')
const {Countries}=require('../models/countries')
const {States}=require('../models/states')
var app=express();

mongoose.set('useFindAndModify', false);
app.use(bodyParser.json());


router.post('/',async(req,res)=>{
    const country=await Countries.findById(req.body.id)
    console.log("Fetching States...")
    console.log(country.country_id)
    const states=await States
                .find({country_id:country.country_id}).sort('name')
    //console.log(states)
    res.send(states);
            })

module.exports=router;