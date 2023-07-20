import express from "express";
import cors from "cors";
import indexRoutes from "./routes/index.routes.js";
import semestreRoutes from "./routes/semestre.routes.js";
import materiaRoutes from "./routes/materia.routes.js";
import estudianteRoutes from "./routes/estudiante.routes.js";
import { dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
app.use(express.json());

app.use(cors());

//rutas
app.use(indexRoutes);
app.use(semestreRoutes);
app.use(materiaRoutes);
app.use(estudianteRoutes);
app.use(express.static(`${__dirname}/public`))

export default app;
