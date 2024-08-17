import { TicketModel } from "../models/ticketModel"
import { ClientModel } from "../models/clientModel"
import { LocalModel } from "../models/localModel"

export class TicketService extends TicketModel{
    public buyTicket = async(data:TicketModel):Promise<boolean>=>{
        const ticketData = new TicketModel(data.id_client,data.id_local,data.destino,data.preco)
        const clientID = await ClientModel.QueryClientBD(data.id_client)
        const localId = await LocalModel.QueryLocalBD(data.id_local)
        if(ticketData.conferTicketData(ticketData)===true && clientID !== false && localId !== false ){
            ticketData.addTicketBD(ticketData)
            return true
        }
        return false
    }
    static ListTicket = async():Promise<any>=>{
        const ticketList = await TicketModel.ListTicketBD()
        if(ticketList != false){
            return ticketList
        }return false
    }
}