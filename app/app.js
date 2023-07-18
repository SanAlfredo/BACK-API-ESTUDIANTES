import express from "express";
import cors from "cors";
import indexRoutes from "./routes/index.routes.js";
import semestreRoutes from "./routes/semestre.routes.js";

const app = express();
app.use(express.json());

app.use(cors());

//rutas
app.use(indexRoutes);
app.use(semestreRoutes);

export default app;
