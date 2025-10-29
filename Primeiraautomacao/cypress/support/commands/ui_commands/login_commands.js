import { loginElements } from "../../elements/login_elements";


//Fluxo de login
//fluxo login email senha
Cypress.Commands.add("validarFormularioLogin", () => {
  cy.get(loginElements.formulariologin).should('be.visible').click();
});

Cypress.Commands.add("validarTituloLogin", () => {
  cy.get(loginElements.tittleMenuLogin).should('be.visible').click();
});

Cypress.Commands.add("clicarInserirEmailLogin", () => {
  cy.get(loginElements.mnLoginInserirEmail).should('be.visible').click();
});

Cypress.Commands.add("clicarInserirSenhaLogin", () => {
  cy.get(loginElements.mnLoginInserirSenha).should('be.visible').click();
});

Cypress.Commands.add("clicarBotaoCancelarLogin", () => {
  cy.get(loginElements.btnLoginCancelar).should('be.visible').click();
});

//fluxo login usar codigo
Cypress.Commands.add("clicarBotaoUsarCodigoLogin", () => {
  cy.get(loginElements.btnLoginUsarCodigo).should('be.visible').click();
});

Cypress.Commands.add("clicarBotaoEnviarCodigoLogin", () => {
  cy.get(loginElements.btnLoginEnviarCodigo).should('be.visible').click();
  cy.wait(700);
});

Cypress.Commands.add("validarMensagemErroEmail", () => {
  cy.get(loginElements.mensagemErroEmail).should('exist').should('be.visible').click();
});

Cypress.Commands.add("clicarBotaoUsarSenha", () => {
  cy.get(loginElements.btnUsarSenha).should('be.visible').click();
});

