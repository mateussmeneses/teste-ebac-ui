/// <reference types="cypress" />

describe('Funcionalidade Página de Produtos', () => {

    beforeEach(() => {
        cy.visit('produtos')
    });
    it('Deve selecionar um produto da lista', () => {
        cy.get('[class="product-block grid"]')
            //.first()
            //.last()
            .eq(2)
            //.contains('Argus All-Weather Tank')
            .click()
    });

    it.only('Deve adicionar um produto ao carrinho', () => {
        var quantidade = 5

        cy.get('[class="product-block grid"]').eq(6).click()
        cy.get('.button-variable-item-33').click()
        cy.get('.button-variable-item-Red').click()
        cy.get('.input-text').clear().type(quantidade)
        cy.get('.single_add_to_cart_button').click()
        cy.get('.dropdown-toggle > .mini-cart-items').should('contain', quantidade)
        cy.get('.woocommerce-message').should('contain', quantidade + ' × “Arcadio Gym Short” foram adicionados no seu carrinho.')
    });
    it.only('Deve adicionar um produto ao carrinho usando dados customizados ', () => {
        cy.addProdutos(5)

    });

});
