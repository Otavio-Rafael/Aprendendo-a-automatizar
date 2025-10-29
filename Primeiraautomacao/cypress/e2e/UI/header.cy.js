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

  it("Validar botão de help", () => {
    cy.clicarBotaoHelp();
  });

  it("Validar navegação pelo menu carros", () => {
    cy.clicarBotaoCarros();
    cy.clicarBotaoCarrosSuvs();
  });

    it("Validar botão de login", () => {
    cy.ClicarBotaoLogin(headerData.text_login);
  });

  it("Validar formulário de cadastro", () => {
    cy.clicarBotaoCadastro();
    cy.vizualizarFomularioCadastro();
    cy.vizualizarTituloFormularioCadastro();
    cy.clicarRegistrarNome();
    cy.clicarRegistrarSurNome();
    cy.clicarRegistrarEmail();
    cy.clicarRegistrarSenha();
    cy.clicarConfirmarSenha();
    cy.clicarBotaoMasculino();
    cy.clicarBotaoFeminino();
    cy.clicarBotaoGenderOutro();
    cy.clicarBotaoEstado();
    cy.clicarBotaoEstadoSP();
    cy.clicarBotaoEstado();
    cy.clicarBotaoEstadoRJ();
    cy.clicarBotaoEstado();
    cy.clicarBotaoEstadoMG();
    cy.clicarBotaoFechaCadastro();
  });
});
