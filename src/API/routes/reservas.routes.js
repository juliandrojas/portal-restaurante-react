import { Router } from "express";
import { consultarReserva, crearReserva } from '../controllers/reservas.controllers.js';
const router = Router();
//Routes
router.post('/crearReserva', crearReserva);
router.get('/consultarReserva', consultarReserva);
export default router;