const {createFormServic, listFromService, listUpdateService, listDeleteService, ListByIdService} = require("../services/formServices");


exports.createForm=async (req,res)=>{
    const result=await createFormServic(req);
    res.status(200).json(result);
}



exports.updateForm=async (req,res)=>{
    const result=await listUpdateService(req);
    res.status(200).json(result);
}

exports.deleteForm=async (req,res)=>{
const result=await listDeleteService(req);
res.status(200).json(result);
}


exports.listForm=async (req,res)=>{
 const result=await listFromService();
 res.status(200).json(result);
}

exports.listById=async (req,res)=>{
    const data=await ListByIdService(req);
    res.status(200).json(data);
}