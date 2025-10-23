const { defineConfig } = require("cypress");

module.exports = defineConfig({
  reporter: 'cypress-mochawesome-reporter', // Define o reporter utilizado, para gerar relatórios HTML e JSON detalhados.
  reporterOptions: {
    reportDir: 'cypress/reports',           // Pasta onde os relatórios serão salvos.
    charts: true,                           // Exibe gráficos resumidos de testes no relatório.
    reportPageTitle: 'Relatório de Testes - EBAC SHOP', // Título da página HTML do relatório.
    embeddedScreenshots: true,              // Insere screenshots diretamente no relatório, útil para falhas.
    inlineAssets: true,                     // Garante que os arquivos CSS/JS do relatório sejam incorporados, evitando links quebrados.
    overwrite: false,                       // Não sobrescreve relatórios antigos, permite gerar vários relatórios.
    html: true,                             // Gera o relatório em HTML.
    json: true,                             // Gera o relatório em JSON (útil para integração com CI/CD).
  },
  e2e: {
    baseUrl: 'http://lojaebac.ebaconline.art.br/',
    setupNodeEvents(on, config) {
      // registra o plugin do reporter
      require('cypress-mochawesome-reporter/plugin')(on);
    },
  },
});
