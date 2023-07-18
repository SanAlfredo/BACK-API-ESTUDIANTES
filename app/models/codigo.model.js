import { conn } from "./conexion.model.js";
import { DataTypes } from "sequelize";

const Codigo = conn.define("codigos", {
  id: {
    type: DataTypes.INTEGER,
    unsigned: true,
    primaryKey: true,
    autoIncrement: true,
  },
  nombre: {
    type: DataTypes.STRING(10),
  }
});

export default Codigo;