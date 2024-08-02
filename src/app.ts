import express, { Application } from 'express'
import  clientRouter  from './routers/clientRouter'
import localRouter from './routers/localRouters'
import ticketRouter from './routers/ticketRouter'
import bodyParser from 'body-parser'

const app:Application=express()
app.use(bodyParser.json())
app.use('/api',clientRouter,localRouter,ticketRouter)


export {app}