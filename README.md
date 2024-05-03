TESTE TÉCNICO 

Teste Prático NodeJs

Construa uma página com NodeJs que contenha os seguintes requisitos:
- Área não Logada
    - Cadastro
        - Nome
        - E-Mail
        - Data de Nascimento
    - Login	
- Área Logada
    - Listar usuários cadastrados
    - Excluir usuário

Utiliza alguma API para trazer alguma funcionalidade adicional.

Mantenha os registros inseridos pela página em banco de dados e Log das Chamadas da API, podendo ser em PostgreSQL, MySql ou em MongoDB.

- Documentação tanto do código como da arquitetura.

Obs.: Lembrando que o cadastro deve possuir validação de dados

Efetuar a entrega do código do teste em sua página do GitHub, lembrando de deixar público.


Documentação do Backend em Node.js
Visão Geral
Este backend em Node.js fornece uma API para gerenciamento de clientes.

A API é baseada em padrões RESTful e utiliza JSON para troca de dados.

Dependências do Projeto
DevDependencies:
@types/node: ^20.12.8
prisma: ^5.13.0
typescript: ^5.4.5
Dependencies:
@fastify/cors: ^9.0.1
@prisma/client: ^5.13.0
fastify: ^4.26.2
tsx: ^4.8.2



1. Endpoint: /cadastroCliente
1.1. POST /cadastroCliente
Descrição: Cria um novo cliente.
Corpo da solicitação (JSON):
json
Copy code
{
    "name": "Nome do Cliente",
    "email": "cliente@example.com",
    "dataNascimento": "YYYY-MM-DD"
}
Resposta de exemplo:
json
Copy code
{
    "id": "uuid",
    "name": "Nome do Cliente",
    "email": "cliente@example.com",
    "dataNascimento": "YYYY-MM-DD"
}
2. Endpoint: /Clients
2.1. GET /Clients
Descrição: Retorna todos os clientes cadastrados.
Resposta de exemplo:
json

![image](https://github.com/luizpianooficial/ProjectNodeJs-Fullstck/assets/44480258/59a0d756-edba-4128-8814-5f1f0a7066ae)

3. Endpoint: /Deleteclients
3.1. DELETE /Deleteclients
Descrição: Remove um cliente pelo ID.
Parâmetros de consulta: id (ID do cliente a ser deletado).
Resposta de exemplo:
json
Copy code
{ "message": "Cliente deletado com sucesso" }
Começando
Para começar a utilizar a API, siga estas etapas:

Clone este repositório.
Instale as dependências do projeto executando npm install.
Inicie o servidor executando npm start.
Acesse a API em http://localhost:3333.
