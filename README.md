# 🛒 ECOMMERCE-CYPRESS-INTERCEPT-TESTS

Projeto de testes automatizados desenvolvido com **Cypress**, utilizando o recurso **`cy.intercept()`** para simular e controlar requisições HTTP em um ambiente de e-commerce.  
O objetivo é validar fluxos no carrinho de compras (adicionar, editar e remover), garantindo maior confiabilidade e independência de ambiente.  
Atividade do **Módulo 23** do curso de **Engenheiro de Qualidade - EBAC**.

---

## 📁 Estrutura do Projeto

```bash
Ecommerce-Cypress-Intercept-Tests/
│
├── cypress/
│   ├── e2e/
│   │   ├── carrinhoIntercept.cy.js   # Testes de interceptação do carrinho
│   │   └── spec.cy.js                # Exemplo de teste
│   │
│   ├── fixtures/                     # Dados estáticos e mocks
│   │   ├── produtos.json
│   │   └── produtoVazio.json
│   │
│   ├── reports/                      # Relatórios de execução (HTML)
│   │   └── index.html
│   │
│   ├── screenshots/                  # Evidências de falhas (geradas automaticamente)
│   │
│   └── support/
│       ├── actions/                  # Ações reutilizáveis (interações com o sistema)
│       │   ├── cadastraUsuario.actions.js
│       │   ├── carrinho.actions.js
│       │   ├── index.js
│       │   └── login.js
│       │
│       ├── factories/                # Geração de dados dinâmicos
│       │   └── usuarioFaker.js
│       │
│       └── pages/                    # Page Objects (padrão de organização)
│           ├── cadastraUsuario.page.js
│           ├── carrinho.page.js
│           ├── home.page.js
│           ├── login.page.js
│           ├── perfil.page.js
│           └── produtos.page.js
│
├── node_modules/
├── cypress.config.js                 # Configuração principal do Cypress
├── package.json                      # Dependências e scripts
├── package-lock.json
└── README.md

```
---

## 🧠 Sobre o usuarioFaker.js

O arquivo **`usuarioFaker.js`** é responsável por criar usuários fictícios para testes automatizados de **cadastro**.  
Ele utiliza a biblioteca **`@faker-js/faker`** para gerar informações realistas, garantindo que cada execução tenha dados únicos e evitando conflitos no ambiente de testes.

### 🔹 Exemplo de geração de dados
```javascript
const { faker } = require('@faker-js/faker');

class UsuarioFaker {
    // Gera um usuário fictício para testes de cadastro e login
    static gerarUsuario() {
        const nome = faker.person.firstName();
        const email = faker.internet.email(nome);
        const senha = '123456'; // Pode usar faker.internet.password() para mais realismo

        return { nome, email, senha };
    }
}
module.exports = UsuarioFaker;
```
---

## 🌐 Uso do cy.intercept()

O comando cy.intercept() é um dos recursos mais poderosos do Cypress.
Ele permite interceptar, simular (mockar) e validar requisições HTTP durante os testes, controlando as respostas da API para diferentes cenários.

### 🔹 Exemplo prático (carrinhoIntercept.cy.js)
```javascript
describe('Interceptando requisições do carrinho', () => {
  it('Deve mockar a resposta da API de produtos', () => {
    cy.intercept('GET', '**/produtos', { fixture: 'produtos.json' }).as('getProdutos');

    cy.visit('/produtos');
    cy.wait('@getProdutos');

    cy.get('.produto-item').should('have.length', 3);
  });
});
```
---

### 🔹 Benefícios do cy.intercept()

- ✅ Simula respostas da API mesmo sem backend ativo
- 🧪 Testa fluxos de erro (404, 500, timeout etc.)
- ⚡ Aumenta a velocidade e estabilidade dos testes
- 🔒 Reduz dependência de ambientes externos

---

### 📊 Relatórios

Após a execução dos testes, os relatórios HTML são gerados automaticamente em:
```bash
/cypress/reports/index.html
```
Basta abrir o arquivo no navegador para visualizar o resumo da execução.

--- 

## 🧩 Tecnologias Utilizadas

- Cypress 🧪 – Framework de testes de ponta a ponta (E2E) para aplicações web.
- Faker.js 👤 – Geração de dados fictícios para testes automatizados.
- JavaScript (ES6+) 💻 – Linguagem base utilizada na automação e escrita dos testes.
- Node.js ⚙️ – Ambiente de execução para o Cypress e suas dependências.
- Cypress Mochawesome Reporter 📊 – Geração de relatórios HTML e JSON detalhados dos resultados dos testes.

--- 

## 🚀 Depedências e como Executar o Projeto

1. **Dependências instaladas**
| Comando                                 | Descrição                                                                               |
| --------------------------------------- | --------------------------------------------------------------------------------------- |
| `npm init -y`                           | Cria o arquivo `package.json` com configurações padrão do projeto.                      |
| `npm install`                           | Instala todas as dependências listadas no `package.json`.                               |
| `npm i -D cypress`                      | Instala o **Cypress**, ferramenta de testes end-to-end.                                 |
| `npm i -D @faker-js/faker`              | Instala o **Faker.js**, para gerar dados falsos (ex: nomes e e-mails).                  |
| `npm i -D cypress-mochawesome-reporter` | Instala o **Cypress Mochawesome Reporter**, que gera relatórios HTML e JSON dos testes. |

   
2. **Abra o Cypress em modo interativo**
    - npx cypress open
3. **Execute os testes em modo headless**
    - npx cypress run
 
---

## 👨‍💻 Autor

**Autor:** Eduardo Ferreira  
*Analista de qualidade de software*
🌐 [LinkedIn – Eduardo Ferreira](https://www.linkedin.com/in/edufgs/)
**Licença:** Projeto desenvolvido para fins educacionais e de prática em automação de testes.
Desenvolvido com foco em boas práticas de automação de testes, isolamento de camadas e simulação de API via interceptação.