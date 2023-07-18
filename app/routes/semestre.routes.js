import { Router } from "express";
import {
  create,
  list,
} from "../controllers/semestre.controller.js";

const semestres = Router();

semestres.post("/semestres", create);
semestres.get("/semestres", list);
// categorias.get("/categorias/:id", detail);
// categorias.put("/categorias/:id", update);
// categorias.delete("/categorias/:id", borrar);

export default semestres;