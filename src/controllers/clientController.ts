import { Request,Response } from "express"
interface ClientData{
    id?:number
    name:string
    email:string
}

export class ClientController{
    public addClient(req:Request,res:Response):void{
        const clientData:ClientData = req.body as ClientData 
        if(typeof clientData.name !== 'string' || clientData.name === '' ||typeof clientData.email !== 'string' || clientData.email === ''){
            res.status(400).json({message:"Dados invalidos"})
        }else{
            res.status(200).json({message:"Dados enviados com sucesso"})
        }
    }
}