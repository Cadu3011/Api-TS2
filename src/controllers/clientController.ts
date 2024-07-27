import {Request,Response } from "express"
import { ClientServices } from "../services/clientServices"

export class ClientController{
    public addClient = async(req:Request,res:Response):Promise<void>=>{
        const clientData = new ClientServices(req.body.name,req.body.email)
        const result = await clientData.clientAdd(clientData)
        if(result){
            res.status(200).json({message:"cadastrado com sucesso"})
        }else{
            res.status(400).json({message:"tipos dados invalidos ou email de usuario ja existente"})
        }
    }
    public queryClient = async(req:Request, res:Response):Promise<void>=>{
        const query= req.query.client
        const clientData = await ClientServices.QueryClientBD(query)
        clientData != false?
        res.json(clientData):
        res.json("cliente não encontrado")
        res.status(200)
    }
    public listClient = async(req:Request, res:Response):Promise<void>=>{
        const listClient = await ClientServices.ListClientBD()
        listClient !=false?
        res.json(listClient):
        res.json("nenhum cliente na lista")
    }
    public deleteClient = async(req:Request,res:Response):Promise<void>=>{
        const queryID = Number(req.query.id)
        const deleteClient = await ClientServices.DeleteClientBD(queryID)
        deleteClient != false?
        res.json("cliente deletado com sucesso"):
        res.json("nenhum cliente encontrado para deletar")
    }
    public editClient = async(req:Request,res:Response):Promise<void>=>{
        const deleteID = Number(req.query.id)
        const clientEditData = new ClientServices(req.body.name,req.body.email)
        const result = await clientEditData.clientEdit(clientEditData,deleteID)
        if(result){ 
                res.status(200).json({message:"editado com sucesso"})
        }else{
            res.status(400).json({message:"tipo de campos invalido ou cliente não encontrado"})
            
            }
    }
}