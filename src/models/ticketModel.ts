interface TicketData{
    id?:number,
    id_client:number,
    destino:string,
    preco:number,
    data:Date
}
class TicketModel implements TicketData{
    id?:number;
    id_client: number;
    destino: string;
    preco: number;
    data: Date;
     
    constructor(id_client:number,destino:string,preco:number,data:Date,id?:number){
        this.id = id
        this.id_client= id_client
        this.destino = destino
        this.preco = preco
        this.data = data
    }    
}