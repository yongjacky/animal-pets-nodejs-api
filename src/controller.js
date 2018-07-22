import { 
    getAllOwnersApi,
    getOwnerByEmail,
    postNewPet,
    getPetsByOwner,
    putPet
 } from './services/dataHandler'

const controller=(router)=>{
    router.get('/owners',async (req,res)=>{
        const allOwners = await getAllOwnersApi(req,res)
        return allOwners
    })

    router.get('/owners/:email',(req,res)=>{
        return getOwnerByEmail(req,res)
    })

    router.post('/owner/:id/pets',(req,res)=>{
        return postNewPet(req,res)
    })

    router.get('/owner/:id/pets',(req,res)=>{
        return getPetsByOwner(req,res)
    }) 

    router.put('/owner/:id/pets/:petId',(req,res)=>{
        return putPet(req,res)
    })
}

export default controller