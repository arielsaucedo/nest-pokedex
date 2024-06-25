<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

# Ejecutar el proyecto en desarrollo

1. Clonar el repositorio
2. Ejecutar

```
$ yarn install
```

3. Tener Nest CLI instalado

```
$ npm i -g @nestjs/cli
```

4. Levantar la base de datos con Docker

```
$ docker-compose up
```

5. Clonar el archivo `.env.template` y renombrarlo a `.env`

6. Llenar las variables de entorno definidas en el archivo `.env`

7. Ejecutar la aplicación de desarrollo

```
$ yarn start:dev
```

7. Reconstruir la base de datos con la semilla

```
http://localhost:3000/api/v1/seed
```

## Stack utilizado

- NestJS
- MongoDB
- Mongoose
