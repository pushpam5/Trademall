const jwt=require('../node_modules/jsonwebtoken')
const config=require('../node_modules/config')

module.exports=function(req,res,next){
    const token =req.body.token
    //console.log(req.body.token)
    if(!token){
        console.log('Access Denied:Login In To Continue')
        error={
            message:'Access Denied:Login In To Continue'
        }
        return res.status(401).send(error);
        
    }
        try{
        const verify=jwt.verify(token,config.get('jwtPrivateKey'));
        console.log(verify)
        req.user=verify;
        next();
    }
    catch(ex){
        console.log('Invalid Token')
        error={
            message:'Invalid Token'
        }       
        res.status(400).send(error);
    }
}