const query = require("../infraestrutura/database/queries");
const moment = require("moment");

class Evento {
  listarEventos() {
    const sql = "SELECT * FROM Eventos";
    return query(sql);
  }

  buscarPorIdEvento(id) {
    const sql = "SELECT * FROM Eventos WHERE id = ?";
    return query(sql, id);
  }

  incluirEvento(evento) {
    const sql = "INSERT INTO Eventos SET ?";
    return query(sql, evento);
  }

  alterarEvento(id, valores) {
    const sql = "UPDATE Eventos SET ? WHERE id = ?";
    return query(sql, [valores, id]);
  }

  excluirEvento(id) {
    const sql = "DELETE FROM Eventos WHERE id = ?";
    return query(sql, id);
  }

  statusAgendado() {
    const dataHoje = moment().format("YYYY-MM-DD HH:MM:ss");
    const sql = "SELECT * FROM eventos WHERE dataInicio >= ?";
    return query(sql, dataHoje);
  }

  statusEmAndamento() {
    const dataHoje = {
      inicio: moment().startOf("day").format("YYYY-MM-DD HH:MM:ss"),
      fim: moment().endOf("day").format("YYYY-MM-DD HH:MM:ss"),
    };
    const sql = "SELECT * FROM eventos WHERE dataInicio <= ? AND dataFim >= ?";
    return query(sql, [dataHoje.inicio, dataHoje.fim]);
  }

  statusFinalizado() {
    const dataHoje = moment().format("YYYY-MM-DD HH:MM:ss");
    const sql = "SELECT * FROM eventos WHERE dataFim < ?";
    return query(sql, dataHoje);
  }
}

module.exports = new Evento();
