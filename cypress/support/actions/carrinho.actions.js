const { produtosPage } = require('../pages/produtos.page');
const { carrinhoPage } = require('../pages/carrinho.page');

class CarrinhoActions {
    static pesquisarAddProduto(produto) {
        // Intercepta a requisição de detalhes do produto
        cy.intercept('GET', '../public/getProductDetails/**', { fixture: 'produtos.json' }).as('getProductDetails');

        produtosPage.abrirPesquisarProduto();
        produtosPage.pesquisarProduto(produto);
        produtosPage.abrirDetalheProduto();
        carrinhoPage.addCarrinho();
    }

    static alterarQuantidade(produto) {
        cy.intercept('PUT', '/public/updateCart/**').as('updateCart');

        this.pesquisarAddProduto(produto); // Reutiliza o fluxo de adicionar produto
        carrinhoPage.alterarQuantidade(); // método que altera a quantidade
        cy.wait('@updateCart').its('response.statusCode').should('eq', 200);

    }

    static removerItem(produto) {

        this.pesquisarAddProduto(produto); // Primeiro, adiciona o produto ao carrinho
        cy.intercept('PUT', '**/public/updateCart/**').as('removeCart'); // Depois faz o intercept da atualização (remoção)
        cy.wait(1000) //time  inserir devito a lentidão da internet
        carrinhoPage.removerProduto();
        cy.wait('@removeCart').its('response.statusCode').should('eq', 200);

    }

    static produtoVazio(produto) {
        cy.intercept('GET', '/public/getProductDetails/**', { fixture: 'produtoVazio.json' }).as('getProductDetails');
        produtosPage.abrirPesquisarProduto();
        produtosPage.pesquisarProduto(produto);
        produtosPage.abrirDetalheProduto();
        cy.wait('@getProductDetails');

    }
}

module.exports = CarrinhoActions;
