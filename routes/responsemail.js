const express=require('express');
const router=express.Router();
const bodyParser=require('../node_modules/body-parser')
const app= express();
// const transporter=require('../send-email/sendemail')
const nodemailer=require('../node_modules/nodemailer')

app.use(bodyParser.json());

router.post('/',async(req,res)=>{
    var transporter=nodemailer.createTransport({
        service:'gmail',
        auth:{
            user:'pushpam160799@gmail.com',
            pass:'Pushpam@123'
        }
    });
    
    const mailOptions={
        from:req.body.email,
        to:'pushpam160799@gmail.com',
        subject:req.body.subject,
        text:req.body.message
    }
    transporter.sendMail(mailOptions,(err,info)=>{
        if(err)
        console.log(err);
        else{
        //console.log(info);
        res.send(info)
        }
    })
})
router.post('/subscribe',async(req,res)=>{
    var transporter=nodemailer.createTransport({
        service:'gmail',
        auth:{
            user:'pushpam160799@gmail.com',
            pass:'Pushpam@123'
        }
    });
    
    const mailOptions={
        from:'pushpam160799@gmail.com',
        to:req.body.email,
        text:req.body.message
    }
    transporter.sendMail(mailOptions,(err,info)=>{
        if(err)
        console.log("hello");
        else{
        //console.log(info);
        res.send(info)
        }
    })
})
module.exports=router;