import { getAllOwnersApi,getOwnerByEmail } from './services/dataHandler'

const controller=(router)=>{
    router.get('/owners',(req,res)=>{
        return getAllOwnersApi(req,res)
    })

    router.get('/owners/:email',(req,res)=>{
        return getOwnerByEmail(req,res)
    })
}

export default controller