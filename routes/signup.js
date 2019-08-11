const mongoose=require('../server/server')
const express=require('express')
const router=express.Router();
const bcrypt=require('../node_modules/bcrypt')
const bodyParser=require('../node_modules/body-parser')
const _=require('../node_modules/lodash')

const {Signup,signupValidate} =require('../models/signup')

var app=express();
mongoose.set('useFindAndModify',false);
app.use(bodyParser.json());


router.post('/',async(req,res)=>{
    const {error}=signupValidate(req.body)
    if(error){
        const errdet={
            message:'Password must contain Lowercase,Uppercase,Number,Character and minlength of 8',
            count:1
        }   
        console.log(error.details[0].message)
        return res.status(404).send(errdet)
    }
    let details=await Signup.findOne({email:req.body.email});
    if(details){
        console.log("User Already Exist") 
        return res.status(400).json({message:'User Already Exist'})
                }
    const customerdet=new Signup(_.pick(req.body,['name','email','country','password']))
    const salt=await bcrypt.genSalt(16);
    customerdet.password=await bcrypt.hash(customerdet.password,salt);
    await customerdet.save();
    console.log("Adding Details...");
    res.send(_.pick(customerdet,['_id','name','email']));
})

module.exports=router;