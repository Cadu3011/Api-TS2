import { Router } from "express";
import { TicketController } from "../controllers/ticketController";

const router = Router()
const ticketController = new TicketController()
router.post('/ticket/add',(ticketController.addTicket))
router.get('/ticket/list',(ticketController.listTicket))
export default router