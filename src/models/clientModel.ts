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
}