const mongoose=require('../server/server')
const express=require('express')
const app=express();
const router=express.Router();
const bodyParser=require('body-parser')
const _=require('../node_modules/lodash')




mongoose.set('userFindAndModify',false)
app.use(bodyParser.json())

const auth=require('../middleware/auth')
const {Signup}=require('../models/signup')
const {DeliveryAdd,validateDeliveryDetails}=require('../models/deliveryadd')

router.post('/',auth,async(req,res)=>{

    const {error} = validateDeliveryDetails(req.body)
    if(error){  
        console.log(error.details[0].message)
        const errdet={
            message:'Enter Correct Credentials',
            count:1
        }   
        console.log(errdet.count)
        return res.status(404).send(errdet)
    }
    let repadd=await DeliveryAdd.findOne({email:req.body.email})
    if(repadd)
    {
        console.log("Address Already Exist");
        return res.status(400).json({message:'Address Already Exist'})     
    }
    let repemail=await Signup.findOne({email:req.body.email})
    if(!repemail)
    {
        console.log("User Not Registered");
        return res.status(400).json({message:'User not Registered'})
    }
    let details=new DeliveryAdd(_.pick(req.body,['firstname','lastname','email','address','country','state','city']))
    await details.save();
    console.log("Adding Delivery Details");
    res.send(_.pick(details,['_id','firstname','lastname'])); 
})
router.put('/me',auth,async(req,res)=>{
    console.log(req.user._id)
    const user=await Signup.findById(req.user._id)
    user.items++;
    user.save();
        details={
            items:user.items
            }
    console.log("Item Added Successfully")
    res.send(details);
})

module.exports=router;