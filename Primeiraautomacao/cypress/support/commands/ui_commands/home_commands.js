import { homeElements } from "../../elements/home_elements";


Cypress.Commands.add("clicarBotaoLogin", () => {
  cy.get(homeElements.btnLogin).should('be.visible');
});
Cypress.Commands.add("clicarBotaoHelp", () => {
  cy.get(homeElements.btnhelp).should('be.visible').click();
});
Cypress.Commands.add("clicarBotaoCarros", () => {
  cy.get(homeElements.btnCarros).should('be.visible').click();
});
Cypress.Commands.add("clicarBotaoCarrosSedans", () => {
  cy.get(homeElements.btnCarrosSedans).should('be.visible').click();
});