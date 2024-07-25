import { Router } from "express";
import { ClientController } from "../controllers/clientController";

const router = Router()
const clientController = new ClientController()
router.get('/view',(clientController.queryClient))
router.get('/list',(clientController.listClient))
router.post('/add',(clientController.addClient))
router.delete('/delete',(clientController.deleteClient))
router.put('/edit', clientController.editClient)
export default router