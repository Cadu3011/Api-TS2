import express, { Application } from 'express'
import  clientRouter  from './routers/clientRouter'
import localRouter from './routers/localRouters'
import bodyParser from 'body-parser'

const app:Application=express()
app.use(bodyParser.json())
app.use('/api',clientRouter,localRouter)


export {app}