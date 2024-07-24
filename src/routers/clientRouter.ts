import { Router } from "express";
import { ClientController } from "../controllers/clientController";

const router = Router()
const clientController = new ClientController()
router.get('/view',(clientController.viewClient))
router.get('/list',(clientController.ViewListClient))
router.post('/add',(clientController.addClient))
router.delete('/delete',(clientController.DeleteClient))
router.put('/edit', clientController.EditClient)
export default router