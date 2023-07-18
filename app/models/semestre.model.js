import { conn } from "./conexion.model.js";
import { DataTypes } from "sequelize";

const Semestre = conn.define("semestres", {
  id: {
    type: DataTypes.INTEGER,
    unsigned: true,
    primaryKey: true,
    autoIncrement: true,
  },
  nombre: {
    type: DataTypes.STRING(100),
  },
});

export default Semestre;