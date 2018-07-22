import { initOwnersData, getAllOwners,findOwnerByEmail,findOwnerById } from '../models/owners'
import * as petsModel from '../models/pets'

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

const postNewPet=async (req,res)=>{
    const id = req.params.id //owner id
    const payload = req.body;
    
    await petsModel.addNewPet(id,payload)

    return res.status(200).json({message: 'New pet has been created for this owner'})
}

const putPet=async (req,res) => {
    const ownerId = req.params.id
    const petId = req.params.petId
    const modifiedPet = req.body

    const anyError = await petsModel.validateUpdatePet(ownerId,petId,modifiedPet,res)
    
    if (anyError) {
        return res.status(422).json(anyError)
    }
    
    await petsModel.updatePet(ownerId,petId,modifiedPet)

    return res.status(200).json({message: 'This pet has been updated for this owner'})
}

const getPetsByOwner=async (req,res)=>{
    const id = req.params.id //owner id
    const pets = await petsModel.getPetsByOwner(id)
    return res.status(200).json(pets)
}

exports.initData=initData
exports.getAllOwnersApi=getAllOwnersApi
exports.getOwnerByEmail=getOwnerByEmail
exports.postNewPet=postNewPet
exports.getPetsByOwner=getPetsByOwner
exports.putPet=putPet