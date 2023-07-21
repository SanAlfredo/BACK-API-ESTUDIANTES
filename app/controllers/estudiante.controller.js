import Estudiante from "../models/estudiante.model.js";
import { unlinkSync } from "fs";

export const createImage = (req, res) => {
  console.log("guardando imagen");
  const imagen = req.file;
  if (imagen) {
    res.send([imagen]);
  } else {
    res.status(400).send({
      message: "no hay la imagen",
    });
  }
};
export const borrarImage = (req, res) => {
  console.log("llamando al metodo de borrado de imagen");
  const name = req.params.path;
  try {
    unlinkSync("./public/uploads/" + name);
    res.send({ message: "borrado exitoso" });
  } catch (error) {
    console.error("algo salio mal no se borro la imagen", error);
  }
};

export const obtenerImagen = (req, res) => {
  try {
    res.download("./public/uploads/" + req.params.path);
  } catch (error) {
    res.status(404).send({
      message: error,
    });
  }
};

export const create = (req, res) => {
  let date = new Date();
  console.log("create Estudiante", req.body);
  const {
    body: { nombre, nacimiento, carnet, foto },
  } = req;
  if (!nombre) {
    res.status(400).send({
      message: "El campo nombre es obligatorio",
    });
    return;
  } else if (!nacimiento) {
    res.status(400).send({
      message: "El campo nacimiento es obligatorio",
    });
    return;
  } else if (!carnet) {
    res.status(400).send({
      message: "El campo carnet es obligatorio",
    });
    return;
  }
  const estudiantes = {
    nombre,
    nacimiento,
    carnet,
    foto,
    createdAt: date,
    updatedAt: date,
  };
  Estudiante.create(estudiantes)
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
  Estudiante.findAll()
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
export const detail = (req, res) => {
  console.log("detalle de Pedidos", req.params);
  Estudiante.findByPk(req.params.id)
    .then((data) =>
      data ? res.send(data) : res.send({ message: "no hay datos" })
    )
    .catch((error) => {
      res.status(500).send({
        message: error.message,
      });
    });
};
export const update = (req, res) => {
  let date = new Date();
  console.log("create Estudiante", req.body);
  const {
    body: { nombre, nacimiento, carnet, foto },
  } = req;
  if (!nombre) {
    res.status(400).send({
      message: "El campo nombre es obligatorio",
    });
    return;
  } else if (!nacimiento) {
    res.status(400).send({
      message: "El campo nacimiento es obligatorio",
    });
    return;
  } else if (!carnet) {
    res.status(400).send({
      message: "El campo carnet es obligatorio",
    });
    return;
  }
  const estudiantes = {
    nombre,
    nacimiento,
    carnet,
    foto,
    updatedAt: date,
  };
  Estudiante.findByPk(req.params.id)
  .then((data) =>
    data
      ? Estudiante.update(estudiantes, { where: { id: req.params.id } })
          .then(res.send("actualizado con exito"))
          .catch((error) => {
            res.status(500).send({
              message: error.message,
            });
          })
      : res.send({ message: "no existe ese estudiante" })
  )
  .catch((error) => {
    res.status(500).send({
      message: error.message,
    });
  });
};
