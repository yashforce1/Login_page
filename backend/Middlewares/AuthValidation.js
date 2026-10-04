const Joi = require('joi');


const signupValidation = (req, res ,next)=>{
    const schema = Joi.object({
        name : Joi.string().min(3).max(100).required(),
        email : Joi.string().email().required(),
        password : Joi.string().min(4).max(100).required()
    });  
    // the above schema - You are telling JOI  this are the  set of rules that you have defined 

    const {error} = schema.validate(req.body);     // ****request.body***  conatins the data (postman sent ,if frontend is not made yet)

    if(error){
        return res.status(400).json({ message : "Bad request",error})
    }
    next();
}


const loginValidation = (req, res ,next)=>{
    const schema = Joi.object({
        name : Joi.string().min(3).max(100).required(),
        email : Joi.string().email().required(),
        password : Joi.string().min(4).max(100).required()
    });
    const {error} = schema.validate(req.body);
    if(error){
        return res.status(400).json({ message : "Bad request",error})
    }
    next();
}

module.exports ={
    signupValidation,
    loginValidation
}