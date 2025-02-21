# Projeto Finalizado de Comentários

Este é um projeto de exemplo para gerenciar comentários em um site. O projeto foi desenvolvido utilizando HTML, CSS, JavaScript, Node.js, Express e MongoDB.

## Funcionalidades

- Adicionar novos comentários
- Excluir comentários existentes
- Listar todos os comentários

## Estrutura do Projeto

- `index.html`: Arquivo principal contendo a estrutura HTML do projeto.
- `styles.css`: Arquivo de estilos CSS para a aparência do projeto.
- `script.js`: Arquivo JavaScript contendo a lógica para gerenciar os comentários.
- `server.js`: Arquivo principal do servidor Node.js.
- `models/Comment.js`: Modelo Mongoose para os comentários.

## Como Executar

1. Clone o repositório para sua máquina local:
    ```bash
    git clone https://github.com/seu-usuario/seu-repositorio.git
    ```

2. Navegue até o diretório do projeto:
    ```bash
    cd seu-repositorio
    ```

3. Crie um arquivo [.env](http://_vscodecontentref_/0) no diretório raiz do projeto e adicione a variável de ambiente para a senha do banco de dados:
    ```properties
    DB_PASSWORD=your_db_password
    ```

4. Instale as dependências do projeto:
    ```bash
    npm install
    ```

5. Inicie o servidor de desenvolvimento:
    ```bash
    npm run dev
    ```

6. Abra o navegador e acesse `http://localhost:3000` para visualizar o projeto.

Certifique-se de substituir `your_db_password` pela senha real do seu banco de dados no arquivo [.env](http://_vscodecontentref_/1).