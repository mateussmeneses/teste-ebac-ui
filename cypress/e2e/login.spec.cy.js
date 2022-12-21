/// <reference types="cypress" />

context ('Funcionalidade Login', () =>{
    beforeEach(() => {
        cy.visit('http://lojaebac.ebaconline.art.br/minha-conta/')
    });

    afterEach(() => {
        cy.screenshot()
    });

    it('Deve fazer login com sucesso', () =>{
        cy.get('#username').type('tester@tester.com.br')
        cy.get('#password').type('tester@tester.com')
        cy.get('.woocommerce-form > .button').click()

        cy.get('.page-title').should('contain', 'Minha conta')
        cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('contain', 'Olá, tester-9860 (não é tester-9860? Sair)')

    })

    it('Deve exibir mensagem de erro ao inserir usuário inválido', () => {
        cy.get('#username').type('tester@tester.com.brr')
        cy.get('#password').type('tester@tester.com')
        cy.get('.woocommerce-form > .button').click()

        cy.get('.woocommerce-error').should('contain', 'Endereço de e-mail desconhecido. Verifique novamente ou tente seu nome de usuário.')

    })
    it('Deve exibir mensagem de erro ao inserir senha inválida', () => {
        cy.get('#username').type('tester@tester.com.br')
        cy.get('#password').type('tester@tester')
        cy.get('.woocommerce-form > .button').click()

        cy.get('.woocommerce-error').should('contain', 'Erro: a senha fornecida para o e-mail tester@tester.com.br está incorreta. Perdeu a senha?')

    })
})
