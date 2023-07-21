import { Router } from "express";
import { create, list, listTot } from "../controllers/materia.controller.js";

const materias = Router();

materias.post("/materias", create);
materias.get("/materias", list);
materias.get("/materias/todo",listTot);

export default materias;
