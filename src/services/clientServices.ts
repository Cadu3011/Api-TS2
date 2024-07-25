import { ClientModel } from "../models/clientModel"

export class ClientServices extends ClientModel{
    
     public clientAdd = async(data:ClientModel):Promise<boolean>=>{
        const clientData = new ClientModel(data.name,data.email)
        const clientExist = await clientData.QueryEmailClientBD(clientData)
        if(clientData.conferClientData(clientData)===true && clientExist===false){
            clientData.AddClientBD(clientData)
            return true
        }
        return false
     }
     public clientEdit = async(data:ClientModel,id:number):Promise<boolean>=>{
        const editClient = new ClientModel(data.name,data.email)
        const idClient = Number(id)
        const clientExist = await ClientModel.QueryClientBD(idClient)
        if(typeof idClient == 'number'&& clientExist !== false){
            editClient.EditClientBd(editClient,idClient)
            return true
        }return false
    
     }
     public queryclient = async(data:any):Promise<any>=>{
        const clientData = await ClientModel.QueryClientBD(data)
        if(clientData != false){
            return clientData
        }return false
     }
     public listClient = async():Promise<any>=>{
        const clientList = await ClientModel.ListClientBD()
        if(clientList != false){
            return true
        }return false
     }
     public deleteclient = async(data:number):Promise<boolean>=>{
        const deleteClient = await ClientModel.DeleteClientBD(data)
        if(deleteClient !=false){
            return true
        }return false
     }
}