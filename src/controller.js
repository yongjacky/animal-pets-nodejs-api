
const controller=(router)=>{
    router.get('/owners',(req,res)=>{
        return res.status(200).json({message: 'Hello 3'})
    })
}

export default controller