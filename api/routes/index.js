const bodyParser = require("body-parser");
const usuarios = require("./usuariosRoute");
const eventos = require("./eventosRoute");

module.exports = (app) => {
  app.use(bodyParser.json());
  app.use(usuarios);
  app.use(eventos);
  app.get("/", (_req, res) => {
    res.send("Bem Vindo Ao LAS-API");
  });
};
