const { faker } = require('@faker-js/faker');

class UsuarioFaker {
    // Gera um usuário fictício para testes de cadastro e login
    static gerarUsuario() {
        const nome = faker.person.firstName();
        const sobreNome = faker.person.lastName();
        const telefone = faker.phone.number()
        const email = faker.internet.email(nome);
        const senha = '123456'; // Pode ser utilizando o faker.internet.password() se quiser mais realismo
        const confirmaSenhar = senha

        return { nome, sobreNome, telefone, email, senha, confirmaSenhar };
    }

}
module.exports = UsuarioFaker;
