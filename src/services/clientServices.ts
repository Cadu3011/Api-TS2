import { db } from "../connection"

interface ClientData{
    id?:number
    name:string
    email:string
}
export class ClientServices {
    
     async clientAddBD (data:ClientData):Promise<void>{
        const add = await db.query('INSERT INTO clientes (nome, email) VALUES (?, ?)',
      [data.name, data.email])
     }
}
export const clientQueryBD = async (client:any):Promise<ClientData | false >=>{
    const [rows] = await db.query('SELECT * FROM clientes WHERE email = ? OR nome = ?',
    [client, client])
    const clientes: ClientData[] = rows as ClientData[];
    if (clientes.length === 0) {
        return false;
      }
      return clientes[0]    
}
export const clientQueryListBD = async ():Promise<ClientData[] | false>=>{
    const [rows] = await db.query('SELECT * FROM clientes ')
    return rows as ClientData[];
}
export const clientDeleteBD = async (clientID:number):Promise<boolean>=>{
    const [client] = await db.query('DELETE FROM clientes WHERE idclientes = ?',clientID)
    if((client as any).affectedRows > 0){
        return true
    }else{
        return false
    }
}
export const clientEditBD = async (data:ClientData, idclient:any):Promise<void>=>{
    const edit = await db.query('UPDATE clientes SET nome = ? WHERE idclientes = ?',[data.name,idclient])
}

