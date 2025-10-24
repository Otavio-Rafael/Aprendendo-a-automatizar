describe("Valida a exibição e funcionalidade do Modal de Login", () => {
  beforeEach(function () {
    cy.visit("/");
  });
  it("Validar a estrutura do modal de login", () => {
    cy.clicarBotaoLogin();
    cy.clicarBotaoHelp();
    cy.clicarBotaoCarros();
  });
   it("Validar a estrutura do modal de login", () => {
    cy.clicarBotaoLogin();
    cy.clicarBotaoHelp();
  });
});
