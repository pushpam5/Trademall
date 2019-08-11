const mongoose=require('../server/server')
const Joi=require('joi')
const passwordComplexity=require('../node_modules/joi-password-complexity')

const loginSchema =new mongoose.Schema({
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true,
        minlength:8
    }


})
const Login=mongoose.model('Login',loginSchema);


function validateLogin(input){
    const complexityOptions = {
        min: 8,
        max: 26,
        lowerCase: 1,
        upperCase: 1,
        numeric: 1,
        symbol: 1,
        requirementCount: 3,
    };
    const Schema={
        email:Joi.string().required(),
        password:new passwordComplexity(complexityOptions).required()
    }
    return Joi.validate(input,Schema)
}

exports.Login=Login
exports.validateLogin=validateLogin
