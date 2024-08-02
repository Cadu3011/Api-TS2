import { db } from "../connection"
interface TicketData{
    id?:number,
    id_client:number,
    id_local:number
    destino:string,
    preco:number,
    date?:Date
}
export class TicketModel implements TicketData{
    id?:number;
    id_local:number;
    id_client: number;
    destino: string;
    preco: number;
    date?: Date;
     
    constructor(id_client:number,id_local:number,destino:string,preco:number,date?:Date,id?:number){
        this.id = id
        this.id_client= id_client
        this.id_local = id_local
        this.destino = destino
        this.preco = preco
        this.date = date
    }    
    public addTicketBD = async(data:TicketData):Promise<void>=>{
        data.date = new Date 
        const add = await db.query('INSERT INTO passagem (id_cliente, id_local,destino,preco,data_passagem) VALUES (?,?,?,?,?)',
            [data.id_client,data.id_local,data.destino,data.preco,data.date])
    }
    public conferTicketData(data:TicketData):boolean{
        if(typeof data.destino !== 'string' || data.destino === "" || typeof data.preco !== 'number' || data.preco <0 ){
            return false
        }return true
     }
     static QueryTicketBD = async(data:any):Promise<TicketData | false>=>{
        const [rows] = await db.query('SELECT * FROM passagem WHERE id_cliente = ? OR id_local = ? OR destino =?,OR preco =?',
            [data,data,data,data])
        const tickets: TicketData[] = rows as TicketData[];
        if(tickets.length === 0){
            return false;
        }
        return tickets[0]  
    }
}