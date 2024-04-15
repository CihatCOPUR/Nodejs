"use strict"
/* -------------------------------------------------------
    NODEJS EXPRESS | CLARUSWAY FullStack Team
------------------------------------------------------- */
const { mongoose } = require('../configs/dbConnection')
/* ------------------------------------------------------- 

{
    "username": "admin",
    "password": "aA*123456",
    "email": "admin@site.com",
    "firstName": "admin",
    "lastName": "admin",
    "isActive": true,
    "isStaff": true,
    "isAdmin": true
}
{
    "username": "staff",
    "password": "aA*123456",
    "email": "staff@site.com",
    "firstName": "staff",
    "lastName": "staff",
    "isActive": true,
    "isStaff": true,
    "isAdmin": false
}
{
    "username": "test",
    "password": "aA*123456",
    "email": "test@site.com",
    "firstName": "test",
    "lastName": "test",
    "isActive": true,
    "isStaff": false,
    "isAdmin": false
}
/* ------------------------------------------------------- */

const UserSchema= new mongoose.Schema({
    username:{
        type:String,
        trim:true,
        required:true,
        unique:true,
        index:true
    },
    password:{
        type:String,
        trim:true,
        required:true
    },
    email:{
        type:String,
        trim:true,
        unique:true,
        required:true,
        index:true

    },
    firstName:{
        type:String,
        required:true,
        trim:true
    },
    lastName:{
        type:String,
        required:true,
        trim:true
    },
    isActive:{
        type:Boolen,
        default:true
    },
    isStaff:{
        type:Boolen,
        default:false
    },
    isAdmin:{
        type:Boolen,
        default:false
    },
},{
    collection:'users',
    timestamps:true
});
//*  exports

module.exports=mongoose.model('User',UserSchema)