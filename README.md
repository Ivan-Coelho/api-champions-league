# ⚽Champions League API

## Descrição
Esta é uma API em desenvolvimento utilizando **Node.js** e **Express** para gerenciamento de jogadores e clubes da Champions League. A API permite listar jogadores e clubes, buscar jogadores por ID, cadastrar novos jogadores, atualizar estatísticas e remover jogadores.

## Rotas Disponíveis

### **Jogadores**
- **Listar todos os jogadores**  
  ```http
  GET /players
  ```  
  Retorna uma lista com todos os jogadores cadastrados.

- **Buscar um jogador pelo ID**  
  ```http
  GET /players/:id
  ```  
  Retorna um jogador específico pelo seu ID.

- **Cadastrar um novo jogador**  
  ```http
  POST /players/
  ```  
  Adiciona um novo jogador ao banco de dados.

- **Atualizar estatísticas de um jogador**  
  ```http
  PATCH /players/:id
  ```  
  Atualiza informações específicas de um jogador.

- **Remover um jogador**  
  ```http
  DELETE /players/:id
  ```  
  Deleta um jogador do banco de dados.

### **Clubes**
- **Listar todos os clubes**  
  ```http
  GET /clubs
  ```  
  Retorna uma lista com todos os clubes cadastrados.

## Tecnologias Utilizadas
- Node.js
- Express
- CORS

## Como Iniciar o Projeto
1. **Clone o repositório:**  
   ```bash
   git clone <URL_DO_REPOSITORIO>
   ```
2. **Acesse o diretório do projeto:**  
   ```bash
   cd nome-do-projeto
   ```
3. **Instale as dependências:**  
   ```bash
   npm install
   ```
4. **Inicie o servidor:**  
   ```bash
   npm run start:dev
   ```

O servidor será iniciado e estará pronto para receber requisições.

## Contribuição
Se deseja contribuir com este projeto, sinta-se à vontade para abrir um pull request ou relatar problemas encontrados.

---
Feito com ❤️ para os fãs da Champions League!

