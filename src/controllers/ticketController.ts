import { Request ,Response } from "express";
import { TicketService } from "../services/ticketServices";

export class TicketController{
    public addTicket = async(req:Request,res:Response):Promise<void>=>{
        const ticketData = new TicketService(req.body.id_client,req.body.id_local,req.body.destino,req.body.preco)
        const result = await ticketData.buyTicket(ticketData)
        if(result){
            res.status(200).json({message:"compra concluida com sucesso"})
        }else{
            res.status(400).json({message:"tipos de dados invalidos ou cliente /local inexistente"})
        }
    }
}