import Codigo from "./codigo.model.js";
import Estudiante from "./estudiante.model.js";
import Materia from "./materia.model.js";
import Semestre from "./semestre.model.js";

Codigo.hasOne(Materia, {
  onUpdate: "CASCADE",
});
Materia.belongsTo(Codigo);

Semestre.hasOne(Materia, {
  onUpdate: "CASCADE",
});
Materia.belongsTo(Semestre);

Estudiante.belongsToMany(Materia, {
  through: "estudiante_materia",
  foreignKey: {
    name: "estudianteId",
  },
});
Materia.belongsToMany(Estudiante, {
  through: "estudiante_materia",
  foreignKey: {
    name: "materiaId",
  },
});
export { Codigo, Estudiante, Materia, Semestre };
