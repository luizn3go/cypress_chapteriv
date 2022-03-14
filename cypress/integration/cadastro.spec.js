/// <reference types="cypress" />

var Chance = require('chance')
var chance = new Chance()

//Mocha -> Test Runner

//describe, context, it

describe('Cadastro', () => {
    it('Quando eu informar os dados e finalizar, então o cadastro deve ser efetuado', () => {
        cy.visit('https://form-agilizei.netlify.app')

        cy.get('input[name=firstName]').type(chance.first())
        cy.get('input[name=lastName]').type(chance.last())
        cy.get('textarea[name=adress]').type(chance.address())
        cy.get('input[name=emailAdress]').type(chance.email())

        cy.get('input[value=n]').check()

        cy.get('input[type=checkbox]').check('Netflix')
        cy.get('input[type=checkbox]').check('Dormir')

        cy.get('select#countries').select('Japão', {force: true})
        cy.get('select#years').select('1990', {force: true})
        cy.get('select#months').select('Junho', {force: true})
        cy.get('select#days').select('21', {force: true})
        
        cy.get('#firstpassword').type('Alunos@123')
        cy.get('#secondpassword').type('Alunos@123')

        cy.get('#submitbtn').click()

        //URL deveria ter listagem no texto
        cy.url().should('contain', 'listagem')
        //select#countries
        //select#years
        //select#months
        //select#days

    });
});