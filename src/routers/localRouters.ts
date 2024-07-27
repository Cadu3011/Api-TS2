import { Router } from "express";
import { LocalController } from "../controllers/localController";

const router = Router()
const localController = new LocalController()

router.post('/local/add',(localController.LocalAdd))
router.get('/local/query',(localController.queryLocal))
router.get('/local/list',(localController.listLocal))
router.delete('/local/delete',(localController.deleteLocal))
router.put('/local/edit',(localController.editLocal))
export default router
