/// <reference types="cypress" />

export const perfilPage = {
    customerName: () => { return cy.get('[data-testid="CustomerName"]') }
}