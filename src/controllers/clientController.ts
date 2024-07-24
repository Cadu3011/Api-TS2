import {Request,Response } from "express"
import {ClientModel} from '../models/clientModel'
import { clientDeleteBD, clientEditBD, clientQueryBD, clientQueryListBD, ClientServices } from "../services/clientServices"


export class ClientController{
    public addClient = async(req:Request,res:Response):Promise<void>=>{
        const clientData = new ClientModel(req.body.name,req.body.email)
        if(clientData.conferClientData(clientData) &&  await clientData.conferClientExist(clientData)){
            res.status(200).json({message:"cadastrado com sucesso"})
            new ClientServices().clientAddBD(clientData)
        }else{
            res.status(400).json({message:"tipos dados invalidos ou email de usuario ja existente"})
        }
    }
    public viewClient = async(req:Request, res:Response ):Promise<void>=>{
        const query= req.query.client
        const clientServiceData = await clientQueryBD(query) 
        clientServiceData != false ?
            res.json(clientServiceData):
            res.json("usuario não encontrado") 
            res.status(200)
    }
    public ViewListClient = async(req:Request, res:Response):Promise<void>=>{
        const clientServiceData = await clientQueryListBD()
        res.json(clientServiceData)
        res.status(200)
    }
    public DeleteClient = async (req:Request, res: Response):Promise<void>=>{
        const query = Number(req.query.client)
        if(typeof query == 'number'){  
        const clientServiceData = await clientDeleteBD(query)
        clientServiceData != false ? 
        res.json({message: "cliente deletado com sucesso"}):
        res.json({message: "cliente nâo existente"})
        }else{
            res.json({message: "tipo de dado inserido invalido"})
        }
    }
    public EditClient = async (req:Request,res:Response):Promise<void>=>{
        const idQuery = Number(req.query.id)
        const clientBody = new ClientModel(req.body.name,req.body.email)
        if(typeof idQuery == 'number'){
            await clientEditBD(clientBody,idQuery)
            res.status(200).json({message:"editado com sucesso"})
        }else{
            res.status(400).json({message:"tipos dados invalidos "})
        }
    }
}