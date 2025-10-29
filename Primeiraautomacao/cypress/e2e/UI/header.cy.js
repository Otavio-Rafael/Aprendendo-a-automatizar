import headerData from "../../fixtures/header.json";


describe("Valida a exibição e funcionalidade do Modal de Login", () => {
  beforeEach(function () {
    cy.visit("/");
  });

    it("Validar botão logo CarAuto", () => {
    cy.clicarBotaoLogoCarAuto();
  });

    it("Validar botão home", () => {
    cy.clicarBotaoHome();
  });

    it("Validar botão SobreNos", () => {
    cy.clicarBotaoSobreNos();
  });

    it("Validar botão carros e modal carros", () => {
    cy.clicarBotaoCarros();
    cy.validarModalCarros();
    cy.clicarBotaoCarrosSuvs();
    cy.clicarBotaoCarros();
    cy.validarModalCarros();
    cy.clicarBotaoCarrosSedans();
  });

  it("Validar botão de help", () => {
    cy.clicarBotaoHelp();
  });

  it("Validar botão de login e modal login", () => {
    cy.ClicarBotaoLogin(headerData.text_login);
    cy.validarFormularioLogin();
  });

  it("Validar botão de cadastro", () => {
    cy.clicarBotaoCadastro();
    cy.vizualizarFomularioCadastro();
  });
});
