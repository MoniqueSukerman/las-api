const query = require("../infraestrutura/database/queries");

class Endereco {
  async listarUFs() {
    const sql = "SELECT sigla FROM ufs ORDER BY sigla";
    return query(sql).then((respostas) =>
      respostas.map((resposta) => resposta.sigla)
    );
  }

  listarMunicipios(uf) {
    const sql = "SELECT * FROM Municipios WHERE uf = ?";
    return query(sql, uf).then((respostas) =>
      respostas.map((resposta) => resposta.nome)
    );
  }
}

module.exports = new Endereco();
