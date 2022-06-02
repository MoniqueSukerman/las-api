const fetch = require("node-fetch");
const { cpf } = require("cpf-cnpj-validator");

const validarURL = async (url) => {
  try {
    const regex =
      /https?:\/\/(www.)?[-a-zA-Z0-9@:%.+~#=]{1,256}.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%+.~#?&/=]*)/gm;
    const formatoDeUrlValido = url.match(regex);
    const response = await fetch(url);
    return !!formatoDeUrlValido && response.status === 200;
  } catch {
    return false;
  }
};

const cpfEhValido = (numeroCPF) => {
  return cpf.isValid(numeroCPF);
};

module.exports = { validarURL, cpfEhValido: cpfEhValido };
