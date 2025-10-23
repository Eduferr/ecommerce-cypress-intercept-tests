/// <reference types="cypress" />

const cadastraUsuarioActions = require('../support/actions/cadastraUsuario.actions');
const CarrinhoActions = require('../support/actions/carrinho.actions');
const { carrinhoPage } = require('../support/pages/carrinho.page');
const { homePage } = require('../support/pages/home.page');

describe('Funcionalidade carrinho interceptando as requisições', () => {

    beforeEach(() => {
        cy.setCookie('ebacStoreVersion', 'v2', { domain: 'lojaebac.ebaconline.art.br' });
        cy.visit("/");
        homePage.abrirMenu('Account');
        const novoUsuario = cadastraUsuarioActions.cadastrarUsuario();
    });

    it('Deve adicionar Produto ao carrinho com sucesso', () => {
        CarrinhoActions.pesquisarAddProduto('bag');
        carrinhoPage.statusCarrinho().should('be.visible');

    });

    it('Deve atualizar a quantidade de um produto no carrinho com sucesso', () => {
        CarrinhoActions.alterarQuantidade('celular');
        carrinhoPage.verQuantidade().should('contain', '2');
    });

    it('Deve remover um item do carrinho com sucesso', () => {
        CarrinhoActions.removerItem('Deltarune');
        carrinhoPage.carrinhoVazio().should('be.visible');
    });

    it('Produto não encontrado', () => {
        CarrinhoActions.produtoVazio('Table');
        carrinhoPage.statusCarrinho().should('not.exist');
    });


});
