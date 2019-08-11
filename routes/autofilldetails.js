const express = require('express')
const app=express();
const router=express.Router();
const mongoose=require('../server/server')
const bodyParser=require('../node_modules/body-parser')


app.use(bodyParser.json());
mongoose.set('useFindAndModify', false);

const {Countries}=require('../models/countries')
const {States}=require('../models/states')
const {Cities}=require('../models/cities')

router.post('/',async(req,res)=>{
    console.log(req.body.country)
    const country=await Countries.findOne({name:req.body.country})
   
    const state=await States.findOne({name:req.body.state,country_id:country.country_id})
    const city=await Cities.findOne({name:req.body.city,state_id:state.state_id})
    const details={
        country_name:country.name,
        state_name:state.name,
        city_name:city.name
    }
    res.send(details);
})

module.exports=router;
