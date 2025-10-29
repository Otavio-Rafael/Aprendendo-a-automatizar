import { headerElements } from "../../elements/header_elements";

Cypress.Commands.add("clicarBotaoLogoCarAuto", () => {
  cy.get(headerElements.btnLogoCarAuto).should('be.visible').click();
});

Cypress.Commands.add("clicarBotaoHome", () => {
  cy.get(headerElements.btnHome).should('be.visible').click();
});

Cypress.Commands.add("clicarBotaoSobreNos", () => {
  cy.get(headerElements.btnSobreNos).should('be.visible').click();
});
//validação botão/modal carros
Cypress.Commands.add("clicarBotaoCarros", () => {
  cy.get(headerElements.btnCarros).should('be.visible').click();
});

Cypress.Commands.add("validarModalCarros", () => {
  cy.get(headerElements.modalCarros).should('be.visible').click();
});

Cypress.Commands.add("clicarBotaoCarrosSuvs", () => {
  cy.get(headerElements.btnCarrosSuvs).should('be.visible').click();
});

Cypress.Commands.add("clicarBotaoCarrosSedans", () => {
  cy.get(headerElements.btnCarrosSedans).should('be.visible').click();
});

Cypress.Commands.add("clicarBotaoHelp", () => {
  cy.get(headerElements.btnHelp).should('be.visible').click();
});

//validação login botão / modal
Cypress.Commands.add("ClicarBotaoLogin", (Text) => {
  cy.get(headerElements.btnLogin).should('exist').should('be.visible').should('have.text', Text).click();
});

//validação cadastro botão / modal
Cypress.Commands.add("clicarBotaoCadastro", () => {
  cy.get(headerElements.btnCadastro).should('be.visible').click();
});

Cypress.Commands.add("vizualizarFomularioCadastro", () => {
  cy.get(headerElements.formularioCadastro).should('be.visible');
});











