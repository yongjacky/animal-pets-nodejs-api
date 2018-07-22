import mcache from 'memory-cache'
import { findOwnerById } from './owners'
import { isValueValid } from '../utils/validate'

const retrievePetsByOwner=(ownerId)=>{
    let owner = mcache.get(ownerId)
    if (!owner) {
        owner = findOwnerById(ownerId)
        owner = { ...owner, pets: [] }
    }
    return owner
}

const addNewPet=(ownerId,newPet)=>{
   let owner = retrievePetsByOwner(ownerId)
   let pet = { id: new Date().getTime(), ...newPet}
   
   owner.pets.push(pet) 

   mcache.put(ownerId,owner)
}

const updatePet=(ownerId,petId,modifiedPet)=>{
    const owner = retrievePetsByOwner(ownerId)
    let pet = owner.pets.filter(item => item.id == petId).shift()
    pet = { id: pet.id, ...modifiedPet }

    const itemIndex = owner.pets.findIndex(item => item.id == petId)
    owner.pets[itemIndex] = pet

    mcache.put(ownerId,owner)
}

const getPetsByOwner=(ownerId)=>{
    const owner = retrievePetsByOwner(ownerId)
    return owner
}

const findPet=(ownerId,petId)=>{
    const owner = retrievePetsByOwner(ownerId)
    let pet = owner.pets.filter(item => item.id == petId).shift()
    return pet
}

const validateUpdatePet=(ownerId,petId,modifiedPet)=>{
    if (!findOwnerById(ownerId)){
        return {error: 'Invalid Owner Id!'}
    }else if (!findPet(ownerId,petId)){
        return {error: 'Invalid Pet Id!'}
    }else if (!isValueValid(modifiedPet['name'])){
        return {error: `Name is required!`}
    }else if (!isValueValid(modifiedPet['colour'])){
        return {error: `Colour is required!`}
    }else if (!isValueValid(modifiedPet['age'])){
        return {error: `Age is required!`}
    }else if (!isValueValid(modifiedPet['breed'])){
        return {error: `Breed is required!`}
    }else if (!isValueValid(modifiedPet['type'])){
        return {error: `Type [Cat or Dog] is required!`}
    }
   
    return null
}

exports.addNewPet=addNewPet
exports.getPetsByOwner=getPetsByOwner
exports.updatePet=updatePet
exports.findPet=findPet
exports.validateUpdatePet=validateUpdatePet