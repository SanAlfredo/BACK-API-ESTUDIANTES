import Semestre from "../models/semestre.model.js";

export const create = (req, res) => {
  console.log("create Semestre", req.body);
  const {
    body: { semestre },
  } = req;
  if (!semestre) {
    res.status(400).send({
      message: "El campo semestre es obligatorio",
    });
    return;
  }
  const semestres = {
    nombre: semestre,
  };
  Semestre.create(semestres)
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
  console.log("listado de semestres llamado", req.body);
  Semestre.findAll()
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
