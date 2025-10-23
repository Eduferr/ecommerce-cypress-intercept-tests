import { homePage } from "../pages/home.page";
const loginPage = require('../pages/login.page')

class LoginActions {
  
  login(email, senha) {
    // Define o cookie necessário
    cy.setCookie('ebacStoreVersion', 'v2', { domain: 'lojaebac.ebaconline.art.br' });
    // Abre a home
    cy.visit("/");
    // Abre o menu Account
    homePage.openMenu('Account');
    // Realiza login na página
    loginPage.login(email, senha);
  }
}

module.exports = new LoginActions();

