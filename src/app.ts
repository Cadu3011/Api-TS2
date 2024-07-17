import express, { Application } from 'express'
import  router  from './routers/clientRouter'
import bodyParser from 'body-parser'
import {application,request,response} from 'express'

const app:Application=express()
app.use(bodyParser.json())
app.use('/client',router)


export {app}