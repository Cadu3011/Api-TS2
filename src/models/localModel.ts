import { db } from "../connection"
interface localData{
    id_local?:number,
    local_name:string
}

export class LocalModel implements localData{
    id_local?: number
    local_name: string
    constructor(local_name:string,id_local?:number){
        this.id_local = id_local
        this.local_name = local_name
    }
    public conferLocalData(data:localData):boolean{
        if(typeof data.local_name !== 'string' || data.local_name === ""){
            return false
        }return true
     }
     public AddLocalBd = async(data:localData):Promise<void>=>{
        const add = await db.query('INSERT INTO local (local_nome) VALUES (?)',
      data.local_name)     
    }
    public EditLocaltBd = async(data:localData, id:number):Promise<void>=>{
        const edit = await db.query('UPDATE local SET local_nome = ? WHERE id_local = ?',[data.local_name,id])
    }
    static QueryLocalNameBD = async(local:localData):Promise<localData | false>=>{
        const [rows] = await db.query('SELECT * FROM local WHERE local_nome = ? OR id_local =?',
            [local.local_name,local.id_local])
        const locals: localData[] = rows as localData[];
        if(locals.length === 0){
            return false;
        }
        return locals[0]  
    }
    static QueryLocalBD = async(local:any):Promise<localData | false>=>{
        const [rows] = await db.query('SELECT * FROM local WHERE local_nome = ? OR id_local =?',
            [local,local])
        const locals: localData[] = rows as localData[];
        if(locals.length === 0){
            return false;
        }
        return locals[0]  
    }
    static ListLocalBD = async():Promise<localData[] | false>=>{
        const [rows] = await db.query('SELECT * FROM local ')
        return rows as localData[];   
    }
    static DeleteLocalBD = async(data:number):Promise<boolean>=>{
        const [local] = await db.query('DELETE FROM local WHERE id_local = ?',[data])
        if((local as any).affectedRows > 0){
            return true
        }
        else{
            return false
        }
    }
}
