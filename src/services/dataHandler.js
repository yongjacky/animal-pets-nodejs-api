import { initOwnersData, getAllOwners,findOwnerByEmail } from '../models/owners'

const initData=()=>{
    initOwnersData()
}

const getAllOwnersApi=(req,res)=>{
    return res.status(200).json(getAllOwners())
}

const getOwnerByEmail=(req,res)=>{
    const email = req.params.email
    const owner = findOwnerByEmail(email)
    return res.status(200).json(owner)
}

exports.initData=initData
exports.getAllOwnersApi=getAllOwnersApi
exports.getOwnerByEmail=getOwnerByEmail