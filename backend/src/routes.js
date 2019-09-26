//Importações
const express = require("express");
const routes = express.Router();

const AppointmentController = require("./controllers/AppointmentController");

//Rotas
routes.get("/appointments", AppointmentController.showAll);
routes.post("/appointments", AppointmentController.create);
routes.get("/appointments/:id", AppointmentController.read);
routes.put("/appointments/:id", AppointmentController.update);
routes.delete("/appointments/:id", AppointmentController.delete);

//Exportando as rotas para serem usadas no server.js
module.exports = routes;
