## Installation

```bash
$ yarn install
```

## Running the app

```bash
# development
$ yarn run start

# watch mode
$ yarn run start:dev

# production mode
$ yarn run start:prod
```

## Test

```bash
# unit tests
$ yarn run test

# e2e tests
$ yarn run test:e2e

# test coverage
$ yarn run test:cov
```
## Run Database Docker with docker-compose and chmod folder database storage with command
sudo chmod -R 777 nest_postgres_data nest_pgadmin_data

## Migration Database
npm run typeorm:generate --name=dev
npm run typeorm:run