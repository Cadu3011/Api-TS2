import { Request,Response } from "express"
import {ClientModel} from '../models/clientModel'
import { ClientServices } from "../services/clientServices"

export class ClientController{
    public addClient(req:Request,res:Response):void{
        const clientData = new ClientModel(req.body.name,req.body.email)
        if(clientData.conferClientData(clientData)){
            res.status(200).json({message:"cadastrado com sucesso"})
            const clientServiceData = new ClientServices(req.body.name,req.body.email)
            clientServiceData.clientAddBD(req.body)
        }else{
            res.status(400).json({message:"tipos dados invalidos"})
        }
    }
}