import express from 'express'
import bodyParser from 'body-parser'
import morgon from 'morgan'
import path from 'path'
import fs from 'fs'
import rfs from 'rotating-file-stream'
import controller from './controller'
import { initData } from './services/dataHandler'

const app = express()
const homeRoute = express.Router()
const api = express.Router()
const serverPort = process.env.port || 3000
const logDirectory = path.join(__dirname,'../logs')
fs.existsSync(logDirectory) || fs.mkdirSync(logDirectory)

const accessLogStream = rfs('access.log',{
    size: '10M',
    interval: '1d',
    path: logDirectory,
    compress: 'gzip'
})

app.use(bodyParser.json({limit: '200mb'}))
app.use(morgon('combined',{stream: accessLogStream}))
app.use('/api',api)
app.use('/',homeRoute)

homeRoute.get('/',(req,res)=>{
    res.status(200).json({message: 'Welcome Animal Pets API Endpoints'})
})

controller(api)

initData()

app.listen(serverPort,()=>{
    console.log('Animal Pets API server started!!')
})