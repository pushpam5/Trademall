const express=require('express')
const config=require('../node_modules/config')
const mongoose=require('../server/server')
const router=express.Router();
const jwt=require('../node_modules/jsonwebtoken')
const bodyParser=require('body-parser')
const bcrypt=require('../node_modules/bcrypt')


const {Signup}=require('../models/signup')
const {validateLogin}=require('../models/login')
var app=express();

mongoose.set('useFindAndModify', false);
app.use(bodyParser.json());

router.post('/',async(req,res)=>{
const {error}=validateLogin(req.body)
if(error){  
    const errdet={
        message:'Credentials Doesn\'t Match',
        count:1
    }   
    console.log(errdet.count)
    return res.status(404).send(errdet)
}
let details=await Signup.findOne({email:req.body.email})
if(!details)
 {
     console.log("User Not Registered");
     return res.status(400).json({message:'User not Registered'})
 }
 const valid=await bcrypt.compare(req.body.password,details.password)
if(valid){

    console.log("Logged in")
   const token=jwt.sign({
       _id:details._id  
   },config.get('jwtPrivateKey'))
    //console.log(reply.count)
    res.header('x-auth-token',token).send({token:token,message:"Logged in Successfully",user:details.name,items:details.items})

    }
else{
    console.log("Password Doesn't Match");
     return res.status(400).json({message:'Email or Password Incorrect'})
}
})

module.exports=router