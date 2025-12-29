import headerData from "../../fixtures/header.json";


describe("Valida a exibição e funcionalidade do Modal de Login", () => {
  beforeEach(function () {
    cy.visit("/");
  });

    it("Validar botão/Imagem logo CarAuto", () => {
    cy.validarImagemLogoCarAuto(headerData.text_altLogo);
    cy.clicarBotaoLogoCarAuto("/");
  });

    it("Validar botão home", () => {
    cy.clicarBotaoHome(headerData.text_home, "/");
  });

    it("Validar botão SobreNos", () => {
    cy.clicarBotaoSobreNos(headerData.text_sobre_nos, "/sobre");
  });

   it.only("Validar redirect de SUVs e Sedans", () => {
    // ✅ SUVs
    cy.clicarBotaoCarros(headerData.text_carros);
    cy.validarModalCarros("Sedans", "SUVs");
    cy.clicarBotaoCarrosSuvsEValidarRedirect(headerData.text_carrossuvs, "/carros/suvs"); // ajuste a url

    cy.visit("/"); // volta pra home pra não depender do estado

     // ✅ Sedans
    cy.clicarBotaoCarros(headerData.text_carros);
    cy.validarModalCarros("Sedans", "SUVs");
    cy.clicarBotaoCarrosSedansEValidarRedirect(headerData.text_carrossedans, "/carros/sedan"); // ajuste a url
  });

  it("Validar botão de ajuda", () => {
    cy.clicarBotaoAjuda(headerData.text_ajuda, "/ajuda");
  });

  it("Validar botão de login e modal login", () => {
    cy.ClicarBotaoLogin(headerData.text_login);
    cy.validarFormularioLogin();
  });

  it("Validar botão de cadastro", () => {
    cy.clicarBotaoCadastro(headerData.text_cadastro);
    cy.vizualizarFomularioCadastro();
  });
});
