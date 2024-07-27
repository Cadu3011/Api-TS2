import { Request,Response } from "express";
import { LocalService } from "../services/localServices";

export class LocalController{
    public LocalAdd = async(req:Request, res:Response):Promise<void>=>{
        const localData = new LocalService(req.body.local_name)
        const result = await localData.LocalAdd(localData)
        if(result){
            res.status(200).json({message:"cadastrado com sucesso"})
        }else{
            res.status(400).json({message:"tipos dados invalidos ou local ja existente"})
        }
    }
    public queryLocal = async(req:Request, res:Response):Promise<void>=>{
        const query= req.query.local_name
        const localData = await LocalService.queryLocal(query)
        localData != false?
        res.json(localData):
        res.json("cliente não encontrado")
        res.status(200)
    }
    public listLocal = async(req:Request, res:Response):Promise<void>=>{
        const listLocal = await LocalService.listLocal()
        listLocal !=false?
        res.json(listLocal):
        res.json("nenhum cliente na lista")
    }
    public deleteLocal = async(req:Request,res:Response):Promise<void>=>{
        const idLocal = Number(req.query.id_local)
        if(typeof idLocal != 'number'){
            res.status(400).json("o valor no campo não é do mesmo tipo do id")
        }else{ 
            const localDelete = await LocalService.deleteLocal(idLocal)
            if(localDelete == true){ 
                res.json('local deletado com sucesso')
            }else{
                res.json('local não encontrado para deletar')
            }
        }
    }
    public editLocal = async(req:Request,res:Response):Promise<void>=>{
        const idLocal = Number(req.query.id_local)
        const editLocal =new LocalService(req.body.local_name)
        const result = await editLocal.localEdit(editLocal,idLocal)
        if(result){
            res.status(200).json({message:"cadastrado com sucesso"})
        }else{
            res.status(400).json({message:"tipos dados invalidos ou local inesistente"})
        }
    }
}