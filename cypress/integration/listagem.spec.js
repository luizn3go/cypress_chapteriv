/// <reference types="cypress" />

describe('Quando não houver cadastros, a listagem deve estar vazia', () => {
    it('', () => {
        cy.fixture("listagem-vazia").then(data => {
            window.localStorage.setItem('data', JSON.stringify(data))
        })
        cy.visit('https://form-agilizei.netlify.app/listagem.html')

        //deveria não ter elementos
        cy.get('table tbody tr').should('have.length', 0)
    });
});

describe('Quando houver um ou mais cadastros, a listagem deve exibir um ou mais registros', () => {
    it('', () => {
        //window.localStorage.setItem('data', JSON.stringify([{"firstName":"Agilizei","lastName":"Feio","adress":"N/A","emailAdress":"test@mail.com","radioGender":"f","checks":["Netflix","Dormir"],"selectCountries":"Japão","selectYears":"1990","selectMonths":"Junho","pwd":"Alunos@123"}]))
        cy.fixture("listagem-com-itens").then(data => {
            window.localStorage.setItem('data', JSON.stringify(data))
        })
        cy.visit('https://form-agilizei.netlify.app/listagem.html')
        cy.get('table tbody tr').should('have.length.above', 0)

    });
});