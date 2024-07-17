import { Router } from "express";
import { ClientController } from "../controllers/clientController";

const router = Router()
const clientController = new ClientController()

router.post('/add',(clientController.addClient))
export default router