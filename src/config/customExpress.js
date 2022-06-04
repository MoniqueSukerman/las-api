const express = require("express");
const consign = require("consign");
const bodyParser = require("body-parser");
const swaggerUi = require("swagger-ui-express");
const swaggerDocument = require("../swagger.json");

const ENV = process.env.NODE_ENV;

module.exports = () => {
  const app = express();

  app.use(bodyParser.urlencoded({ extended: true }));
  app.use(bodyParser.json());

  app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

  app.get("/", (_req, res) => {
    res.send("Bem vindo ao LAS-API");
  });

  consign().include("src/controllers").into(app);

  // eslint-disable-next-line no-unused-vars
  app.use((err, _req, res, _next) => {
    //erro interno da aplicação
    if (err.erroApp) {
      res.status(400).send(err.erroApp);
      //erro do servidor fora do ambiente de produção
    } else if (ENV !== "production") {
      res.status(500).send({ error: err.message });
      //erro do servidor em ambiente de produção
    } else {
      res.status(500).send({ error: "Algo deu errado..." });
    }
  });

  app.get("/", (_req, res) => {
    res.send("Bem Vindo Ao LAS-API");
  });

  return app;
};
