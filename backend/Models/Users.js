console.lo

const { required } = require('joi');
const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const UserSchema = new Schema({
    name : {
        type : String,
        required : true,
    },
    email : {
        type : String,
        required : true,
        unique : true
    },
    password:{
        type : String,
        required :  true,
    }

});

const UserModel = mongoose.model('Auth-db/users',UserSchema)  //users here is collection name 


module.exports = UserModel;