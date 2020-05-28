import { initLogger } from '../util/logger';

/**
 * Init logger
 */
const log = initLogger('LOAD_PAGE');

/**
 * Is visiting a page
 */
Cypress.Commands.add('loadPage', (url: string) => {
  return cy.visit(url);
});
