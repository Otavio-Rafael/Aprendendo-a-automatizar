import headerData from "../../fixtures/header.json";

describe("Valida a exibição e funcionalidade do Modal de Login", () => {
  beforeEach(function () {
    cy.visit("/");
  });

it("Validar fluxo de login email/senha", () => {
    cy.ClicarBotaoLogin(headerData.text_login);
    cy.validarFormularioLogin();
    cy.validarTituloLogin();
    cy.clicarInserirEmailLogin();
    cy.clicarInserirSenhaLogin();
    cy.clicarBotaoCancelarLogin();
  });

it("Validar fluxo de login usar código", () => {
    cy.ClicarBotaoLogin(headerData.text_login);
    cy.validarFormularioLogin();
    cy.clicarBotaoUsarCodigoLogin();
    cy.validarTituloLogin();
    
    cy.clicarBotaoEnviarCodigoLogin();
    cy.validarMensagemErroEmail();
    cy.clicarBotaoUsarSenha();
  })
});