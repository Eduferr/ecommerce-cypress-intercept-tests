/// <reference types = "cypress"/>

export const produtosPage = {

    abrirPesquisarProduto() {
        cy.get('[data-testid="search-products"]').click()
    },

    pesquisarProduto(produto) {
        cy.get('[data-testid="searchInput"]').type(produto)
    },

    abrirDetalheProduto() {
        cy.get('[data-testid="browse-product-list"] [data-testid="productDetails"]').first().click()
    },
}