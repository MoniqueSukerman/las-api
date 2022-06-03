const usuariosMock = require("./usuarios");

class Usuario {
  listarUsuarios() {
    const usuariosCompletos = usuariosMock;

    const usuarios = usuariosCompletos.map((usuario) => ({
      id: usuario.id,
      nome: usuario.nome,
      urlFotoPerfil: usuario.urlFotoPerfil,
    }));

    return Promise.resolve(usuarios);
  }

  buscarPorIdUsuario(id) {
    const usuarioCompleto = usuariosMock.find((usuario) => usuario.id === id);
    let usuario = null;
    if (usuarioCompleto) {
      usuario = {
        id: usuarioCompleto.id,
        nome: usuarioCompleto.nome,
        urlFotoPerfil: usuarioCompleto.urlFotoPerfil,
      };
    }
    return Promise.resolve(usuario);
  }

  async adicionaUsuario(usuario) {
    return Promise.resolve(usuario && { insertId: 99 });
  }

  async vericaNomeUsuario(nome) {
    const consulta = Promise.resolve(
      usuariosMock.filter((usuario) => usuario.nome === nome)
    );

    return consulta;
  }

  alterarUsuario(id, valores) {
    if (!!id && !!valores) {
      return Promise.resolve({ changedRows: 1 });
    }
  }

  excluirUsuario(id) {
    return Promise.resolve(id);
  }

  buscarPorNome(nome) {
    function filtraPorParteDoNome(usuario) {
      return usuario.nome.includes(nome);
    }
    const usuariosCompletos = usuariosMock.filter(filtraPorParteDoNome);

    const usuarios = usuariosCompletos.map((usuario) => ({
      id: usuario.id,
      nome: usuario.nome,
      urlFotoPerfil: usuario.urlFotoPerfil,
    }));

    return Promise.resolve(usuarios);
  }

  //Dados pessoais

  atualizarDadosPessoais(id, dadosPessoais) {
    if (!!id && !!dadosPessoais) {
      return Promise.resolve({ changedRows: 1 });
    }
  }
  listarDadosPessoaisPorId(id) {
    const usuarioCompleto = usuariosMock.find((usuario) => usuario.id === id);
    let dadosPessoais = null;
    if (usuarioCompleto) {
      dadosPessoais = {
        nomeCompleto: usuarioCompleto.nomeCompleto,
        dataNascimento: usuarioCompleto.dataNascimento,
        rg: usuarioCompleto.rg,
        cpf: usuarioCompleto.cpf,
      };
    }
    return Promise.resolve(dadosPessoais);
  }

  //Contatos

  atualizarContatos(id, contatos) {
    if (!!id && !!contatos) {
      return Promise.resolve({ changedRows: 1 });
    }
  }
  listarContatosPorId(id) {
    const usuarioCompleto = usuariosMock.find((usuario) => usuario.id === id);
    let contatos = null;
    if (usuarioCompleto) {
      contatos = {
        telefone: usuarioCompleto.telefone,
        celular: usuarioCompleto.celular,
        email: usuarioCompleto.email,
      };
    }
    return Promise.resolve(contatos);
  }

  //Senha

  atualizarSenha(id, novaSenha) {
    if (!!id && !!novaSenha) {
      return Promise.resolve({ changedRows: 1 });
    }
  }

  //Endereço

  listarEnderecoPorId(id) {
    const usuarioCompleto = usuariosMock.find((usuario) => usuario.id === id);
    let endereco = null;
    if (usuarioCompleto) {
      endereco = {
        cep: usuarioCompleto.cep,
        endereco: usuarioCompleto.endereco,
        numero: usuarioCompleto.numero,
        complemento: usuarioCompleto.complemento,
        bairro: usuarioCompleto.bairro,
      };
    }
    return Promise.resolve(endereco);
  }
  atualizarEndereco(id, endereco) {
    if (!!id && !!endereco) {
      return Promise.resolve({ changedRows: 1 });
    }
  }
}
module.exports = new Usuario();
