# Animal Pets NodeJs API Codebase
This project is created for demostration and showcase purposes.

## Setup
#### Prerequisites
Install babel using npm (we assume you have pre-installed node.js)
```
npm install babel -g
```
#### Install Dependencies
```
npm install
```
#### Start local development
This command serves the app at http://localhost:3000
```
npm run dev
```

## Docker
#### Prerequisites
Install docker environment in your machine
#### Build and Deploy this app to Docker Container
```
docker-compose up --build -d
```

## API
#### List of owners
Returns json data about the list of owners
* **URL**

  /api/owners

* **Method**
  
  `GET`

#### Create New Pet
Adding new Pet for a particular owner
* **URL**

  /api/owner/{id}/pets

* **Method**
  
  `POST`

* **URL Params**
  **Required**

  `id=[An integer value of owner's identifier]`

* **Data Params**

  Sample json payload

  `
  {
	"name": "Cookies", 
    "colour": "Brown",
    "age": 2, 
    "breed": "American Cat",
    "type": "Cat"
  }
  `

#### Update Pet
Update existing Pet information
* **URL**

  /api/owner/{id}/pets/{petId}

* **Method**
  
  `PUT`

* **URL Params**
  **Required**
  
  `
  id=[An integer value of owner's identifier]
  
  petId=[An integer value of pet's identifier]
  `
* **Data Params**

  Sample json payload

  `
  {
	"name": "Cookies", 
    "colour": "Brown",
    "age": 2, 
    "breed": "American Cat",
    "type": "Cat"
  }
  `

#### List of Pets by an owner
Listing of pets by an owner information
* **URL**

  /api/owner/{id}/pets

* **Method**
  
  `GET`

* **URL Params**
  **Required**
  
  `
  id=[An integer value of owner's identifier]
  `     

## Unit Testing
#### Prerequisites
Install mocha using npm
```
npm install mocha -g
```

#### Test Execution
Start your development server
```
npm start
```
Execute testing command
```
npm test
```
Test Result
```
/GET Owners
    ✓ it should GET all the owners

/POST Pet
    ✓ it should add new pet for this owner id 1

/GET Pets for an owner
    ✓ it should get all pets for an owner id 1

/Update Pet for an owner
    ✓ it should updated a pet for an owner id 1


  4 passing (148ms)

```