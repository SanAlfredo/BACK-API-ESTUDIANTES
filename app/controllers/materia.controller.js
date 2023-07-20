import Codigo from "../models/codigo.model.js";
import Materia from "../models/materia.model.js";
import Semestre from "../models/semestre.model.js";

export const create = (req, res) => {
  let date = new Date();
  console.log("create materia", req.body);
  const {
    body: { materia },
  } = req;
  if (!materia) {
    res.status(400).send({
      message: "El campo materia es obligatorio",
    });
    return;
  }
  const materias = {
    nombre: materia,
    createdAt: date,
    updatedAt: date,
  };
  Materia.create(materias)
    .then((data) => {
      res.send(data);
    })
    .catch((error) => {
      res.status(500).send({
        message: error.message,
      });
    });
};
export const list = (req, res) => {
  console.log("listado de materias llamado", req.body);
  Materia.findAll()
    .then((data) =>
      data
        ? res.send(data)
        : res.send({
            message: "no hay datos",
          })
    )
    .catch((error) => {
      res.status(500).send({
        message: error.message,
      });
    });
};
export const listTot = (req, res) => {
  console.log("listado de materias + extras llamado", req.body);
  Materia.findAll({
    include: [{ model: Codigo }, { model: Semestre }],
  })
    .then((data) =>
      data
        ? res.send(data)
        : res.send({
            message: "no hay datos",
          })
    )
    .catch((error) => {
      res.status(500).send({
        message: error.message,
      });
    });
};
