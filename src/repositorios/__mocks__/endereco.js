const ufsMock = require("./ufs.json");
const municipiosMock = require("./municipios.json");

class Endereco {
  listarUFs() {
    const ufs = ufsMock.map((estado) => estado.sigla);
    return Promise.resolve(ufs);
  }

  listarMunicipios(uf) {
    const estado = uf.toUpperCase();
    const municipiosPorEstado = municipiosMock.filter(
      (municipio) => municipio.UF === estado
    );
    const nomesMunicipios = municipiosPorEstado.map(
      (resposta) => resposta.nome
    );

    return Promise.resolve(nomesMunicipios);
  }
}

module.exports = new Endereco();
