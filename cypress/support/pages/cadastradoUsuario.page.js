/// <reference types="cypress" />

class CadastraUsuarioPage {

    // Elementos
    get signupLink() { return cy.get('[data-testid="signUp"]'); }
    get inputNome() { return cy.get('[data-testid="firstName"]'); }
    get inputSobrenome() { return cy.get('[data-testid="lastName"]'); }
    get inputTelefone() { return cy.get('[data-testid="phone"]'); }
    get inputEmail() { return cy.get('input[placeholder="Email Address"]'); }
    get inputSenha() { return cy.get('input[placeholder="Password"]').filter(':visible'); }
    get inputConfirmaSenha() { return cy.get('input[placeholder="Re-enter Password"]'); }
    get btnCriarConta() { return cy.get('[data-testid="create"]'); }

    // Métodos de interação
    clicarSignup() {
        this.signupLink.click();
    }

    preencherNome(nome) {
        this.inputNome.clear().type(nome);
    }

    preencherSobrenome(sobrenome) {
        this.inputSobrenome.clear().type(sobrenome);
    }

    preencherTelefone(telefone) {
        this.inputTelefone.clear().type(telefone);
    }

    preencherEmail(email) {
        this.inputEmail.clear().type(email);
    }

    preencherSenha(senha) {
        this.inputSenha.clear().type(senha);
        this.inputConfirmaSenha.clear().type(senha);
    }

    clicarCriarConta() {
        this.btnCriarConta.click();
    }

}

module.exports = new CadastraUsuarioPage();
