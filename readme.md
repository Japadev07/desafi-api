# 📝 Blog API com Node.js e MongoDB

Este projeto é uma API RESTful para gerenciamento de usuários, categorias e postagens de blog. Desenvolvido com Node.js, Express e MongoDB, ele permite operações CRUD completas e está pronto para ser testado localmente.

## 🚀 Tecnologias Utilizadas

- Node.js
- Express.js
- MongoDB
- Mongoose
- Dotenv
- Bcrypt (para hash de senhas)

## 📦 Instalação e Execução

### 1. Clone o repositório

```bash
git clone https://github.com/Japadev07/desafi-api.git
cd desafi-api

2. Instale as dependências
npm install

3. Configurei o ambiente
Criei um arquivo .env na raiz do projeto com:
env
MONGO_URI=mongodb://localhost:27017/site
PORT=3000

4. Inicie o servidor

node app.js

📌 Endpoints da API
👤 Usuários
POST /users → Criar novo usuário

GET /users → Listar todos os usuários

GET /users/:id → Obter usuário específico

PUT /users/:id → Atualizar usuário

DELETE /users/:id → Deletar usuário

🗂️ Categorias
POST /categories → Criar nova categoria

GET /categories → Listar todas as categorias

PUT /categories/:id → Atualizar categoria

DELETE /categories/:id → Deletar categoria

📝 Postagens
POST /posts → Criar nova postagem

GET /posts → Listar todas as postagens

GET /posts/:id → Obter postagem específica

PUT /posts/:id → Atualizar postagem

DELETE /posts/:id → Deletar postagem

📂 Estrutura de Pastas
Código
desafi-api/
├── models/
├── routes/
├── app.js
├── server.js
├── .env
├── package.json
├── package-lock.json
└── README.md

📬 Contato
Desenvolvido por Evertorn – Maranhão, Brasil GitHub: Japadev07