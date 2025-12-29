import { defineConfig } from "cypress";
export default defineConfig({
  e2e: {
    baseUrl: "https://qauto.websitesa.app.br",
    supportFile: "cypress/support/e2e.js",
  },
watchForFileChanges: false,
});