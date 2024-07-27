import { Router } from "express";
import { ClientController } from "../controllers/clientController";

const router = Router()
const clientController = new ClientController()
router.get('/client/view',(clientController.queryClient))
router.get('/client/list',(clientController.listClient))
router.post('/client/add',(clientController.addClient))
router.delete('/client/delete',(clientController.deleteClient))
router.put('/client/edit', clientController.editClient)
export default router