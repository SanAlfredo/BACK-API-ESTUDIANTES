import { conn } from "../models/conexion.model.js";
import "../models/index.model.js";

export const ping = (req, res) => {
  if (conn) {
    res.json("Conectado con exito");
  } else {
    res.json("Ha ocurrido algun problema");
  }
};
export const index = (req, res) => {
  res.json("Bienvenido API REST de CRUD estudiantes Fisica");
};