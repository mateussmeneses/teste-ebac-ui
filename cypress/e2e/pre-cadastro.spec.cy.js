/// <reference types="cypress" />
var faker = require('faker');
context('Funcionalidade pré cadastro', () => {

    beforeEach(() => {
        cy.visit('minha-conta')
    });

    it('Deve completar o pré cadastro com sucesso', () => {
        let emailFaker = faker.Internet.email()
        let nomeFaker = faker.Name.firstName()
        let sobrenomeFaker = faker.Name.lastName()

        cy.get('#reg_email').type(emailFaker)
        cy.get('#reg_password').type('testadordemais')
        cy.get(':nth-child(4) > .button').click()
        cy.get('.woocommerce-MyAccount-navigation-link--edit-account > a').click()
        cy.get('#account_first_name').type(nomeFaker)
        cy.get('#account_last_name').type(sobrenomeFaker)
        cy.get('.woocommerce-Button').click()
        cy.get('.woocommerce-message').should('contain', 'Detalhes da conta modificados com sucesso.')

    });

    it('Deve completar o cadastro com sucesso completando com dados customizados', () => {
        let emailFaker2 = faker.Internet.email()
        cy.preCadastro(emailFaker2, 'senha!forte@', 'Mateus', 'Meneses')
    });

});
