
process.env.NODE_ENV = 'test';

let chai = require('chai');
let chaiHttp = require('chai-http');
let expect = require('chai').expect

chai.use(chaiHttp);

const apiServer = 'http://localhost:3000'

describe('/GET Owners', ()=>{
    it('it should GET all the owners', ()=> {
        return chai.request(apiServer)
            .get('/api/owners')
            .then((res)=>{
                expect(res).to.have.status(200);
                expect(res).to.be.json;
                expect(res.body).to.be.an('array')
            })
    });
});

const ownerId = 1
const newPet = {
    name: 'Cookies',
    colour: 'Brown',
    age: 2,
    breed: 'American Cat',
    type: 'Cat'
}

describe('/POST Pet', ()=> {
    it(`it should add new pet for this owner id ${ownerId}`, ()=>{
        return chai.request(apiServer)
            .post(`/api/owner/${ownerId}/pets`)
            .send(newPet)
            .then((res)=>{
                expect(res).to.have.status(200);
            })
    })
})

describe('/GET Pets for an owner', ()=>{
    it(`it should get all pets for an owner id ${ownerId}`, ()=>{
        return chai.request(apiServer)
            .get(`/api/owner/${ownerId}/pets`)
            .then((res)=>{
                expect(res).to.have.status(200);
                expect(res).to.be.json;
                expect(res.body).to.be.an('object')
                const owner = res.body;
                expect(owner.pets).to.be.an('array')
            })
    })
})

const modifiedPet = {
    name: 'Cookies',
    colour: 'Brown',
    age: 3,
    breed: 'American Dog',
    type: 'Dog'
}

describe('/Update Pet for an owner', ()=>{
    it(`it should updated a pet for an owner id ${ownerId}`, ()=>{
        return chai.request(apiServer)
            .get(`/api/owner/${ownerId}/pets`)
            .then((res)=>{
                const owner = res.body;
                const pet = owner.pets.shift()
                
                return chai.request(apiServer)
                .put(`/api/owner/${ownerId}/pets/${pet.id}`)
                .send(modifiedPet)
                .then((postRes)=>{
                    expect(postRes).to.have.status(200);
                })
            })
    })
})