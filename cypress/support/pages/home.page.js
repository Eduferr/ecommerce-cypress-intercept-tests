/// <reference types = "cypress"/>

export const homePage = {

    abrirMenu(menu) {
        return cy.get(`[href="/Tab/${menu}"]`).click()
    },
}