const { defineConfig } = require("cypress");
module.exports = defineConfig({
  e2e: {
    baseUrl: "https://qauto.websitesa.app.br/",
    setupNodeEvents(on, config) {
      // implement node event listeners here, se necessário
    },
  },
});