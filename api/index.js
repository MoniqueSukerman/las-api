const express = require("express");
const routes = require("./routes");

const app = express();
const port = 3000;

const ENV = process.env.NODE_ENV;

routes(app);

app.listen(port, () => console.log(`Servidor está rodando na porta ${port}`));

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

module.exports = app;
