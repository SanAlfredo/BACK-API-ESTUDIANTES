import { conn } from "./conexion.model.js";
import { DataTypes } from "sequelize";

const Estudiante = conn.define("estudiantes", {
  id: {
    type: DataTypes.INTEGER,
    unsigned: true,
    primaryKey: true,
    autoIncrement: true,
  },
  nombre: {
    type: DataTypes.STRING(200),
  },
  nacimiento: {
    type: DataTypes.DATE,
  },
  carnet: {
    type: DataTypes.INTEGER,
  },
  foto: {
    type: DataTypes.STRING,
  },
});

export default Estudiante;
