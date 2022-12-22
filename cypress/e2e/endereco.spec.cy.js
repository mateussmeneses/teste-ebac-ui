/// <reference types="cypress" />

describe('Funcionalidade Endereço faturamento e Endereço entrega', () => {
    beforeEach(() => {
        cy.visit('minha conta')
        cy.fixture('perfil').then(dados =>{
            cy.login(dados.usuario, dados.senha)
        })

    });
    it('Deve fazer cadastro de faturamento com sucesso', () => {

    });
});
