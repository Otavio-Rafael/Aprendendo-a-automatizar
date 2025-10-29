import { headerElements } from "../../elements/header_elements";


Cypress.Commands.add("ClicarBotaoLogin", (Text) => {
  cy.get(headerElements.btnLogin).should('exist').should('be.visible').should('have.text', Text).click();
});

Cypress.Commands.add("clicarBotaoHelp", () => {
  cy.get(headerElements.btnhelp).should('be.visible').click();
});

Cypress.Commands.add("clicarBotaoCarros", () => {
  cy.get(headerElements.btnCarros).should('be.visible').click();
});

Cypress.Commands.add("clicarBotaoCarrosSuvs", () => {
  cy.get(headerElements.btnCarrosSuvs).should('be.visible').click();
});

Cypress.Commands.add("clicarBotaoCadastro", () => {
  cy.get(headerElements.btnCadastro).should('be.visible').click();
});

Cypress.Commands.add("vizualizarFomularioCadastro", () => {
  cy.get(headerElements.formulariocadastro).should('be.visible');
});

Cypress.Commands.add("vizualizarTituloFormularioCadastro", () => {
  cy.get(headerElements.tittleMenuCadastro).should('be.visible');
});

Cypress.Commands.add("clicarRegistrarNome", () => {
  cy.get(headerElements.mnCadastro_Nome).should('be.visible').click();
});

Cypress.Commands.add("clicarRegistrarSurNome", () => {
  cy.get(headerElements.mnCadastro_SurNome).should('be.visible').click();
});

Cypress.Commands.add("clicarRegistrarEmail", () => {
  cy.get(headerElements.mnCadastro_Email).should('be.visible').click();
});

Cypress.Commands.add("clicarRegistrarSenha", () => {
  cy.get(headerElements.mnCadastro_Senha).should('be.visible').click();
});

Cypress.Commands.add("clicarConfirmarSenha", () => {
  cy.get(headerElements.mnCadastro_ConfirmarSenha).should('be.visible').click();
});

Cypress.Commands.add("clicarBotaoMasculino", () => {
  cy.get(headerElements.btnGender_Masculino).should('be.visible').click();
});

Cypress.Commands.add("clicarBotaoFeminino", () => {
  cy.get(headerElements.btnGender_Feminino).should('be.visible').click();
});

Cypress.Commands.add("clicarBotaoGenderOutro", () => {
  cy.get(headerElements.btnGernder_Outro).should('be.visible').click();
});

Cypress.Commands.add("clicarBotaoEstado", () => {
  cy.get(headerElements.btnEstado).should('be.visible').click();
});

Cypress.Commands.add("clicarBotaoEstadoSP", () => {
  cy.get(headerElements.btnEstado_Sp).should('be.visible').click();
});

Cypress.Commands.add("clicarBotaoEstadoRJ", () => {
  cy.get(headerElements.btnEstado_Rj).should('be.visible').click();
});

Cypress.Commands.add("clicarBotaoEstadoMG", () => {
  cy.get(headerElements.btnEstado_Mg).should('be.visible').click();
});

Cypress.Commands.add("clicarBotaoFechaCadastro", () => {
  cy.get(headerElements.btnFecharCadastro).should('be.visible').click();
});