const mongoose=require('../server/server')
const Joi=require('joi')
const Signup=require('./signup')
const Countries=require('./countries')
const States=require('./states')
const Cities=require('./cities')


const deliveryaddSchema=new mongoose.Schema({
    firstname:{
        type:String,
        required:true
    },
    lastname:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    address:{
        type:String,
        required:true
    },
    country:{
      type:String,
        required:true
        
    },
    state:{
        type:String,
        required:true
    },
    city:{
        type:String,
        required:true
    }
});
const DeliveryAdd=mongoose.model('DeliveryAdd',deliveryaddSchema);

function validateDeliveryDetails(input){
    
    const Schema={
        firstname:Joi.string().required(),
        lastname:Joi.string().required(),
        email:Joi.string().required(),
        address:Joi.string().required(),
        country:Joi.string().required(),
        state:Joi.string().required(),
        city:Joi.string().required(),
        token:Joi.string().required()    }
    return Joi.validate(input,Schema);
}
exports.DeliveryAdd=DeliveryAdd;
exports.validateDeliveryDetails=validateDeliveryDetails;