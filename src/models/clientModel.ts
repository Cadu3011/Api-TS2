import { db } from "../connection"
interface ClientData{
    id?:number
    name:string
    email:string
}
export class ClientModel implements ClientData{
     id?: number
     name: string
     email: string
     constructor(name:string,email:string,id?:number){
        this.id=id
        this.name = name
        this.email= email
     }
     public conferClientData(data:ClientData):boolean{
        if(typeof data.name !== 'string' || data.name === "" || typeof data.email !== 'string' || data.email === ""){
            return false
        }return true
     }
     public AddClientBD = async(data:ClientData):Promise<void>=>{
        const add = await db.query('INSERT INTO clientes (nome, email) VALUES (?, ?)',
      [data.name, data.email])     
    }
    public EditClientBd = async(data:ClientData, id:number):Promise<void>=>{
        const edit = await db.query('UPDATE clientes SET nome = ? WHERE idclientes = ?',[data.name,id])
    }
    static QueryClientBD = async(client:any):Promise<ClientData | false>=>{
        const [rows] = await db.query('SELECT * FROM clientes WHERE email = ? OR nome = ? OR idclientes =?',
            [client,client,client])
        const clientes: ClientData[] = rows as ClientData[];
        if(clientes.length === 0){
            return false;
        }
        return clientes[0]  
    }
    static ListClientBD = async():Promise<ClientData[] | false>=>{
        const [rows] = await db.query('SELECT * FROM clientes ')
        return rows as ClientData[];   
    }
     public QueryEmailClientBD = async(data:ClientData):Promise<ClientData | false | string>=>{
        const [rows] = await db.query('SELECT * FROM clientes WHERE email = ?',
            [data.email])
        const emails: ClientData[] = rows as ClientData[];
        if(emails.length === 0){
            return false;
        }
        return emails[0]  
    }
    static DeleteClientBD = async(data:number):Promise<boolean>=>{
        const [client] = await db.query('DELETE FROM clientes WHERE idclientes = ?',[data])
        if((client as any).affectedRows > 0){
            return true
        }
        else{
            return false
        }
    }
    
     
}
