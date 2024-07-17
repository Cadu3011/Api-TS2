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
     public clientAddBD(data:ClientData):void{
        const query = `INSERT INTO clients (nome,email) VALUES(${data.name},${data.email})`
        console.log(query)
     }
}