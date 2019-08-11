const mongoose=require('mongoose')
mongoose.connect('mongodb://localhost/trademall',{useNewUrlParser:true})
.then(()=>{
    console.log("Connected to Database Trademall")
}).catch(err=>console.error("Error Connecting Trademall"));

module.exports=mongoose;