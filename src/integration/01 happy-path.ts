/// <reference path="../support/index.d.ts" />
describe('Happy path', () => {

  before(() => {
    cy.loadPage('/login')
  });

  it('Try to load login page', () => {
    // cy.get('.h000-mktg').contains('Built for developers');
  });

  it('Login', () => {
    cy.loadPage('/login')
    cy.get('#login_field').type(Cypress.env('username'));
    cy.get('#password').type(Cypress.env('password'));
    cy.get('.btn').click();
  });

});