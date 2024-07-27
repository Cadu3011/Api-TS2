import { LocalModel } from "../models/localModel";

export class LocalService extends LocalModel{
    public LocalAdd = async(data:LocalModel):Promise<boolean>=>{
        const localData = new LocalModel(data.local_name)
        const localExist = await LocalModel.QueryLocalNameBD(localData)
        if(localData.conferLocalData(localData)===true && localExist===false){
            localData.AddLocalBd(localData)
            return true
        }
        return false
     }
     public localEdit = async(data:LocalModel,id:number):Promise<boolean>=>{
        const editLocal = new LocalModel(data.local_name)
        const idLocal = Number(id)
        const localExist = await LocalModel.QueryLocalBD(idLocal)
        if(typeof idLocal == 'number'&& localExist !== false){
            editLocal.EditLocaltBd(editLocal,idLocal)
            return true
        }return false 
     }
     static queryLocal = async(data:any):Promise<any>=>{
        const localData = await LocalModel.QueryLocalBD(data)
        if(localData != false){
            return localData
        }return false
     }
     static listLocal = async():Promise<any>=>{
        const clientList = await LocalModel.ListLocalBD()
        if(clientList != false){
            return clientList
        }return false
     }
     static deleteLocal= async(data:number):Promise<true|false>=>{
        const deleteLocal = await LocalModel.DeleteLocalBD(data)
        if(deleteLocal !=false){
            return true
        }return false
     }
}