const database = require("../models");

class EventoController {
  static async listarEventos(_req, res, next) {
    try {
      const todosOsEventos = await database.Eventos.findAll();
      console.log(todosOsEventos);
      return res.json(todosOsEventos);
    } catch (erros) {
      return next(erros);
    }
  }
}

module.exports = EventoController;
