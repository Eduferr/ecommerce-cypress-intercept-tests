const { defineConfig } = require("cypress");

module.exports = defineConfig({
  reporter: 'cypress-mochawesome-reporter',
  reporterOptions: {
    reportDir: 'cypress/reports',  // pasta onde ficará o relatório
    charts: true,                  // exibe gráficos
    reportPageTitle: 'Relatório de Testes - EBAC SHOP',
    embeddedScreenshots: true,     // insere screenshots no relatório
    inlineAssets: true,            // evita links quebrados
  },
  e2e: {
    baseUrl: 'http://lojaebac.ebaconline.art.br/',
    setupNodeEvents(on, config) {
      // registra o plugin do reporter
      require('cypress-mochawesome-reporter/plugin')(on);
    },
  },
});
