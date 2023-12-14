const mongoose=require('mongoose');
const {Model} = require("mongoose");

const DataSchema=mongoose.Schema({
    firstName:{type:String,required:true},
    lastName:{type:String,required: true},
    gender:{type:String,required:true},
    dateOfBirth:{type:String,required:true},
    nationality:{type:String,required:true},
    address:{type:String,required:true},
    email:{type:String,required:true},
    phone:{type:String,required:true},
    admissionDate:{type:String,required:true},
    courses:{type:String,required:true},
},
    {
        timestamps:true,versionKey:false
    }
    )

const registrationModel=mongoose.model("students",DataSchema);
module.exports=registrationModel;