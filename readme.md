# API-M4

Este projeto é uma API desenvolvida para [descreva brevemente o propósito do projeto]. Abaixo estão as instruções para configurar, rodar o projeto e as rotas disponíveis.

## Como rodar o projeto

Siga os passos abaixo para configurar e executar o projeto:

1. **Clone o repositório**:
    ```bash
    git clone <URL_DO_REPOSITORIO>
    cd API-M4
    ```

2. **Suba os containers com Docker**:
    Certifique-se de ter o Docker instalado e as portas que estão configuradas no arquivo docker-compose liberadas.
    ```bash
    docker compose up -d
    ```

3. **Instale as dependências**:
    Caso esteja rodando localmente (fora do container):
    ```bash
    npm install
    ```

4. **Execute as migrations**:
    ```bash
    npm run prisma:deploy
    ```

5. **Inicie o servidor**:
    ```bash
    npm run start:dev
    ```

6. **Acesse a aplicação**:
    O servidor estará disponível em `http://localhost:3000`.

---

## Rotas Disponíveis

### Todas rotas da aplicação estão disponíveis no arquivo `api.http`

instalando a extensão "REST Client" você consegue fazer as requisições direto do arquivo

---

## Variáveis de Ambiente

Certifique-se de configurar as variáveis de ambiente no arquivo `.env`. Exemplo:

```
MYSQL_ROOT_PASSWORD=
MYSQL_DATABASE=
MYSQL_USER=
MYSQL_PASSWORD=
MYSQL_PORT=

NODE_ENV=dev

DATABASE_URL="mysql://usuario:senha@localhost:3306/nome_do_banco"
SHADOW_DATABASE_URL="mysql://usuario:senha@localhost:3307/nome_do_banco"
```

---

## Tecnologias Utilizadas

- Node.js
- Prisma ORM
- Docker
- Mysql
- Fastify

---