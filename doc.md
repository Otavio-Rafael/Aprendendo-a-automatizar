## Checklist de Tarefas QA
- [x] Criar chave SSH e clonar um git através dela
- [x] Criar repositório no Github
- [x] Escolher sistema para testar(Site do Gerson)
- [x] Escolher estrutura de projeto(POM - Padrão Page Object Model)
- [x] Instalar o cypress localmente
- [ ] Configuração inicial com sistema de testes
- [ ] Versionamento para o github(estruturar e implementar o gitgnore) incompleto
- [ ] cemantica(estrutura)
- [ ] configurar as branchs

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


  Não esquecer de retirar o furmalio de cadastro do header
    //Fluxo de cadastro
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


  btnCadastro: '[data-qa-id="qa_header_auth_register"]',//botão de cadastro no header
  formulariocadastro: '[data-qa-id="qa_register_dialog"]',//formulário de cadastro
  tittleMenuCadastro: '[data-qa-id="qa_register_title"]',//título do menu de cadastro
  mnCadastro_Nome:'[data-qa-id="qa_register_name"]',//campo nome no menu de cadastro
  mnCadastro_SurNome:'[data-qa-id="qa_register_surname"]',//campo sobrenome no menu de cadastro
  mnCadastro_Email:'[data-qa-id="qa_register_email"]',//campo email no menu de cadastro
  mnCadastro_Senha:'[data-qa-id="qa_register_password"]',//campo senha no menu de cadastro
  mnCadastro_ConfirmarSenha:'[data-qa-id="qa_register_confirm_password"]',//campo confirmar senha no menu de cadastro
  btnGender_Masculino: '[data-qa-id="qa_register_gender_male"]',//botão gênero masculino no menu de cadastro
  btnGender_Feminino: '[data-qa-id="qa_register_gender_female"]',//botão gênero feminino no menu de cadastro
  btnGernder_Outro: '[data-qa-id="qa_register_gender_other"]',//botão gênero outro no menu de cadastro
  btnEstado: '[data-qa-id="qa_register_state"]',//botão estado no menu de cadastro
  btnEstado_Sp: '[data-qa-id="qa_register_state_sp"]',//botão estado são paulo no menu de cadastro
  btnEstado_Rj: '[data-qa-id="qa_register_state_rj"]',//botão estado rio de janeiro no menu de cadastro
  btnEstado_Mg: '[data-qa-id="qa_register_state_mg"]',//botão estado minas gerais no menu de cadastro
  btnFecharCadastro: '[data-qa-id="qa_register_close_button"]'//botão fechar no menu de cadastro