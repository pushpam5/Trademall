const mongoose=require('../server/server')
const Joi=require('../node_modules/joi')
const passwordComplexity=require('../node_modules/joi-password-complexity')


const signupSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true,
        minlength:2
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    country:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true,
        minlength:8
    },
    items:{
        type:Number,
        default:0
    }   

});
const Signup=mongoose.model('Signup',signupSchema);


function signupValidate(input){
    
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
        name:Joi.string().required().min(3),
        email:Joi.string().required(),
        country:Joi.string().required(),
        password:new passwordComplexity(complexityOptions).required()
    }
    return Joi.validate(input,Schema)
}

exports.signupValidate=signupValidate;
exports.Signup=Signup;