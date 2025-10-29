import "./commands/ui_commands/header_commands";
import "./commands/ui_commands/login_commands";
Cypress.on('uncaught:exception', () => {
    return false
  })