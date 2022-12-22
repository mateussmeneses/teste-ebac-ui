/// <reference types="cypress" />
const perfil = require('../e2e/perfil.json')

context ('Funcionalidade Login', () =>{
    beforeEach(() => {
        cy.visit('minha-conta')
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

    it('Deve fazer login com sucesso - usando arquivo de dados', () => {
        cy.get('#username').type(perfil.usuario)
        cy.get('#password').type(perfil.senha)
        cy.get('.woocommerce-form > .button').click()

        cy.get('.page-title').should('contain', 'Minha conta')
    });
    it('Deve fazer login com sucesso - usando fixture', () => {
        cy.fixture('perfil').then(dados => {
            cy.get('#username').type(dados.usuario)
            cy.get('#password').type(dados.senha)
            cy.get('.woocommerce-form > .button').click()

            cy.get('.page-title').should('contain', 'Minha conta')
        })
    });

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
