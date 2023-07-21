import { Router } from "express";
import {
  create,
  list,
  createImage,
  obtenerImagen,
  borrarImage,
  detail,
  update,
  borrar,
  buscar1,
  buscar2,
  buscar3,
} from "../controllers/estudiante.controller.js";
import multer from "multer";

//metodo que utiliza la libreria multer para guardar archivos
//tambien podemos guardar imagenes
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "./public/uploads");
  },
  filename: (req, file, cb) => {
    const ext = file.originalname.split(".").pop();
    const nombreNuevo = `${Date.now()}.${ext}`;
    cb(null, nombreNuevo);
  },
});
//funciona como un middleware
const upload = multer({ storage });

const estudiantes = Router();

estudiantes.post("/estudiantes", create);
estudiantes.post("/estudiantes/foto", upload.single("file"), createImage);
estudiantes.delete("/estudiantes/foto/:path", borrarImage);
estudiantes.get("/estudiantes", list);
estudiantes.get("/estudiantes/:id", detail);
estudiantes.get("/estudiantes/foto/:path", obtenerImagen);
estudiantes.patch("/estudiantes/:id", update);
estudiantes.delete("/estudiantes/:id", borrar);
estudiantes.get("/estudiantes/nombre/:valor", buscar1);
estudiantes.get("/estudiantes/materia/:valor",buscar2);
estudiantes.get("/estudiantes/nombre/:valor1/materia/:valor2",buscar3);

export default estudiantes;
