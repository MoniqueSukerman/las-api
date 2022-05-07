const Usuarios = require("../models/usuarios");

module.exports = (app) => {
  app.get("/usuarios", (req, res) => {
    Usuarios.listar()
      .then((resultados) => res.status(201).json(resultados))
      .catch((erros) => res.status(400).json(erros));
  });

  app.get("/usuarios/:id", (req, res, next) => {
    const id = parseInt(req.params.id);
    Usuarios.buscarPorId(id, res, next);
  });

  app.post("/usuarios", (req, res, next) => {
    const usuarios = req.body;
    Usuarios.adicionar(usuarios, res, next);
  });

  app.put("/usuarios/:id", (req, res, next) => {
    const id = parseInt(req.params.id);
    const valores = req.body;
    Usuarios.alterar(id, valores, res, next);
  });

  app.delete("/usuarios/:id", (req, res, next) => {
    const id = parseInt(req.params.id);
    Usuarios.excluir(id, res, next);
  });

  app.get("/usuarios/nome/:nome", (req, res, next) => {
    const nome = req.params.nome;
    Usuarios.buscarPorNome(nome, res, next);
  });
};
