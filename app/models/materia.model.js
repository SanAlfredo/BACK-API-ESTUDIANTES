import { conn } from "./conexion.model.js";
import { DataTypes } from "sequelize";

const Materia = conn.define("materias", {
  id: {
    type: DataTypes.INTEGER,
    unsigned: true,
    primaryKey: true,
    autoIncrement: true,
  },
  cod: {
    type: DataTypes.INTEGER,
  },
  nombre: {
    type: DataTypes.STRING(100),
  }
});

export default Materia;