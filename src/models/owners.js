import mcache from 'memory-cache'

const keyModel = 'owners'

const getAllOwners=()=>{
    const data = mcache.get(keyModel)
    return data
}

const initOwnersData=()=>{
    let owners = []

    let ownerAnxon = {}
    ownerAnxon['id'] = 1
    ownerAnxon['name'] = 'Anxon Tan'
    ownerAnxon['email'] = 'anxon@pets.com'
    ownerAnxon['phone'] = '+60123111234',
    ownerAnxon['address'] = '11, Jalan BU 6/1, 47800 Petaling Jaya, Selangor'
    
    owners.push(ownerAnxon)

    let ownerDarien = {}
    ownerDarien['id'] = 2
    ownerDarien['name'] = 'Darien Chong'
    ownerDarien['email'] = 'darien@pets.com'
    ownerDarien['phone'] = '+60123115678',
    ownerDarien['address'] = '22, Jalan BU 6/1, 47800 Petaling Jaya, Selangor'
    
    owners.push(ownerDarien)

    mcache.put(keyModel,owners)
}

const findOwnerByEmail=(email)=>{
    const owners = getAllOwners()
    const owner = owners.filter(owner=> owner.email == email).shift()
    return owner
}

exports.initOwnersData=initOwnersData
exports.getAllOwners=getAllOwners
exports.findOwnerByEmail=findOwnerByEmail