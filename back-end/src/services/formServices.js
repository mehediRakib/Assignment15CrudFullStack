const registrationModel=require('../model/RegistrationModel');
const {response} = require("express");

const createFormServic=async (req)=>{
    try{
        const reqbody=req.body;
        const data=await registrationModel.create(reqbody);
        return ({status:"success",data:data});
    }catch (e) {
        return ({status:"fail",data: e.toString()});

    }

}

const listFromService=async ()=>{
    try{
        const data=await registrationModel.find();
        return({status:"success",data:data});
    }catch (e) {
        return({status:"success",data:e.toString()});
    }

}


const listUpdateService=async (req)=>{
    try{
        const reqbody=req.body
        const id=req.params.ID;
        const query={_id:id}
        const data=await registrationModel.updateOne(query,reqbody);
        return({status:'success',data:data});
    }catch (e) {
        return ({status:"fail",data:e.toString()})
    }
}

const listDeleteService=async(req)=>{
    try{
        const id=req.params.ID;
        const query={_id:id};
        const data=await  registrationModel.deleteOne(query);
        return({status:"success",data:data});
    }catch (e) {
        return ({status:"fail",data:e.toString()});
    }
}

const ListByIdService=async (req) => {
    const ID = req.params.ID;
    try {
        const ID = req.params.ID;
        const query = {_id: ID};
        const data = await registrationModel.find(query);
        return ({status: "success", data: data});
    } catch (e) {
        return ({status: "fail", data: e}.toString());
    }
}


module.exports={
    createFormServic,
    listFromService,
    listUpdateService,
    listDeleteService,
    ListByIdService
}