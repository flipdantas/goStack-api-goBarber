## 🚧 Em etapa de finalização 🚧 

# Go Barber
Sistema de agendamento para cortes de cabelo. Api em NodeJS, que serve ao app Mobile iOS e Android feito em React-Native e ao sistema Web em React JS.
Esta é uma das aplicações do Go Barber, para ver as outras acesse o link:
- [GoBarber Web](https://github.com/flipdantas/goStack-api-goBarber)

## Rodando a aplicação
Para rodar o projeto será necessário instalar as seguintes aplicações:

- Docker
- Node
- Yarn (Opcional)

### Pré-requisitos
Subindo a base de dados:

```bash
 docker run --name database -p 5432:5432 -d -e POSTGRES_DBNAME=gobarber
 ```

Obs: Vocé pode escolher qualquer nome para a base de dados, devendo somente alterar no arquivo database.js dentro da pasta config, assim como valores referente ao ambiente (usuario, host, etc).

É necessário rodar as migrations para que o Typeorm crie as tabelas necessárias no banco de dados, através do comando:

```bash
  # Criar as tabelas no PostgreSQL
  yarn typeorm migration:run

  # Executar o servidor
  yarn dev:server
```

Instalando as dependências.

```bash
yarn install
```

## Algumas ferramentas utilizadas

- bcryptjs
- jwt
- express
- date-fns
- multer
- typeorm
- postgres
- yup

# Autor

[Filipe Dantas](https://github.com/flipdantas)
