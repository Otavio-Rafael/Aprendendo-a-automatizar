import { headerElements } from "../../elements/header_elements";


Cypress.Commands.add("validarImagemLogoCarAuto", (CarAuto) => {
  cy.get(headerElements.btnLogoCarAuto).should('exist').should("be.visible")
  .should("have.attr", "alt", CarAuto).should("have.attr", "src");
});

Cypress.Commands.add("clicarBotaoLogoCarAuto", (expectedUrlPart) => {
  cy.get(headerElements.btnLogoCarAuto).should('exist').should('be.visible').click();
  cy.url().should("include", expectedUrlPart);
});

Cypress.Commands.add("clicarBotaoHome", (Text, expectedUrlPart) => {
  cy.get(headerElements.btnHome).should('exist').should('be.visible').should('have.text', Text).click();
  cy.url().should("include", expectedUrlPart);
});

Cypress.Commands.add("clicarBotaoSobreNos", (Text, expectedUrlPart) => {
  cy.get(headerElements.btnSobreNos).should('exist').should('be.visible').should('have.text', Text).click();
  cy.url().should("include", expectedUrlPart);
});
//validação botão/modal carros
Cypress.Commands.add("clicarBotaoCarros", (Text) => {
  cy.get(headerElements.btnCarros)
    .should("exist")
    .should("be.visible")
    .should("have.text", Text)
    .click();
  cy.get(headerElements.modalCarros).should("be.visible");
});
Cypress.Commands.add("validarModalCarros", (item1, item2) => {
  const items = Array.isArray(item1) ? item1 : [item1, item2].filter(Boolean);

  cy.get(headerElements.modalCarros)
    .should("exist")
    .should("be.visible");

  items.forEach((item) => {
    cy.contains('li[role="menuitem"]', item).should("be.visible");
  });
});
Cypress.Commands.add("clicarBotaoCarrosSuvsEValidarRedirect", (Text, expectedUrlPart) => {
  cy.get(headerElements.btnCarrosSuvs)
    .should("exist")
    .should("be.visible")
    .should("have.text", Text)
    .click();

  cy.url().should("include", expectedUrlPart);
});

Cypress.Commands.add("clicarBotaoCarrosSedansEValidarRedirect", (Text, expectedUrlPart) => {
  cy.get(headerElements.btnCarrosSedans)
    .should("exist")
    .should("be.visible")
    .should("have.text", Text)
    .click();

  cy.url().should("include", expectedUrlPart);
});

Cypress.Commands.add("clicarBotaoAjuda", (Text, expectedUrlPart) => {
  cy.get(headerElements.btnHelp).should('exist').should('be.visible').should('have.text', Text).click();
  cy.url().should("include", expectedUrlPart);
});

Cypress.Commands.add("ClicarBotaoLogin", (Text) => {
  cy.get(headerElements.btnLogin).should('exist').should('be.visible').should('have.text', Text).click();
});

Cypress.Commands.add("clicarBotaoCadastro", (Text) => {
  cy.get(headerElements.btnCadastro).should('exist').should('be.visible').should('have.text', Text).click();
});

Cypress.Commands.add("vizualizarFomularioCadastro", () => {
  cy.get(headerElements.formularioCadastro).should('exist').should('be.visible');
});











