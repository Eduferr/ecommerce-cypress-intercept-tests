/// <reference types="cypress" />

const cadastraUsuarioPage = require('../pages/cadastradoUsuario.page');
const usuarioFaker = require('../factoires/usuarioFaker');

class CadastraUsuarioActions {

    cadastrarUsuario() {
        const usuario = usuarioFaker.gerarUsuario();

        cadastraUsuarioPage.clicarSignup();
        cadastraUsuarioPage.preencherNome(usuario.nome);
        cadastraUsuarioPage.preencherSobrenome(usuario.sobreNome);
        cadastraUsuarioPage.preencherTelefone(usuario.telefone);
        cadastraUsuarioPage.preencherEmail(usuario.email);
        cadastraUsuarioPage.preencherSenha(usuario.senha);
        cadastraUsuarioPage.clicarCriarConta();

        // Retorna o usuário gerado caso precise validar depois
        return usuario;
    }

}
module.exports = new CadastraUsuarioActions();
