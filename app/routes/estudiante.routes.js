import { Router } from "express";
import {
  create,
  list,
  createImage,
  obtenerImagen,
} from "../controllers/estudiante.controller.js";
import multer from "multer";

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
const upload = multer({ storage });

const estudiantes = Router();

estudiantes.post("/estudiantes", create);
estudiantes.post("/estudiantes/foto", upload.single("file"), createImage);
estudiantes.get("/estudiantes", list);
estudiantes.get("/estudiantes/foto/:path", obtenerImagen);
// categorias.get("/categorias/:id", detail);
// categorias.put("/categorias/:id", update);
// categorias.delete("/categorias/:id", borrar);

export default estudiantes;
