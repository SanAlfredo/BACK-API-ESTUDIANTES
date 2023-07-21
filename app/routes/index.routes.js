import { Router } from "express";
import { ping, index } from "../controllers/index.controller.js";

const router = Router();

//la ruta ping solo sirve para saber si se conecta a la BD
router.get("/ping", ping);
router.get("/", index);

export default router;