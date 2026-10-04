const UserModel = require("../Models/Users");
const bcrypt = require('bcrypt');

const signup = async(req,res)=>{
    try{
        const {name , email,password} = req.body;    //here data is coming 

        const user = await UserModel.findOne({email}); // if u are already in the system u dont have to signup again

        if(user){
            return res.status(409)
             .json({message  : "user already exist"});
        }

        const newUser = new UserModel({name , email , password});
        newUser.password = await bcrypt.hash(password , 10);

        await newUser.save();
        console.log(newUser);
        res.status(201)
        .json({
            message : " signup sucessfully",
            sucsess : true
        })
    }
    catch(err){ 
        res.status(500).json({
            message : 'signup Fail',
            success :  false,
            error  : err.message
        });
    }
}
module.exports = {
    signup
}


// okkay const user = await .... here with the help of email id we are checking in the mongodb if user exist or not - if exist then the eamil will be present in user(variable). so message will be printed "user already exists". and it stops other wise it will create a new user 