/// <reference types = "cypress"/>

export const carrinhoPage = {


    addCarrinho() {
        cy.get('[data-testid="addToCart"]').click()
    },

    statusCarrinho() {
        //timeout: 0 - possibilita usar `.should('be.visible')` e `.should('not.exist')`, nos testes
        return cy.contains('My Cart', { timeout: 0 });
    },

    alterarQuantidade() {
        cy.get('[data-testid="addItem"]').click()
    },

    verQuantidade() {
        return cy.get('[data-testid="itemsQty"]')
    },

    verCarrinho() {
        //cy.wait(500)
        cy.get('.css-146c3p1.r-lrvibr').eq(1).click()
    },

    removerProduto() {
        cy.get('[data-testid="remove"]').click()
    },

    carrinhoVazio() {
        return cy.get('[data-testid="emptyCart"]')
    }

}