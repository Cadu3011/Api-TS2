import { db } from "../connection"

interface ClientData{
    id?:number
    name:string
    email:string
}
export class ClientServices implements ClientData{
    id?: number
     name: string
     email: string
     constructor(name:string,email:string,id?:number){
        this.id=id
        this.name = name
        this.email= email
     }
     async clientAddBD (data:ClientData):Promise<void>{
        const add = await db.query('INSERT INTO clientes (nome, email) VALUES (?, ?)',
      [data.name, data.email])
     }
}