const database = require("../models");

class UsuarioController {
  static async listarUsuarios(_req, res, next) {
    try {
      const todosOsUsuarios = await database.Usuarios.findAll();
      return res.json(todosOsUsuarios);
    } catch (erros) {
      return next(erros);
    }
  }

  static async buscarPorIdUsuario(req, res, next) {
    const { id } = req.params;
    try {
      const usuarioBuscado = await database.Usuarios.findOne({
        where: { id: id },
      });
      return res.json(usuarioBuscado);
    } catch (erros) {
      return next(erros);
    }
  }

  //   static async adicionarUsuario(req, res, next) {
  //     const novoUsuario = req.body;
  //     try {
  //       const usuarioBuscado = await database.Usuarios.create(novoUsuario);
  //       return res.json(usuarioBuscado);
  //     } catch (erros) {
  //       return next(erros);
  //     }
  //   }
}

module.exports = UsuarioController;
