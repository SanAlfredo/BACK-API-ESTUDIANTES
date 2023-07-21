import { Router } from "express";
import {
  create,
  list,
} from "../controllers/semestre.controller.js";

const semestres = Router();

semestres.post("/semestres", create);
semestres.get("/semestres", list);

export default semestres;