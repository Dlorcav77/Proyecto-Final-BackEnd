# Proyecto Final - Hito 3

- Se creó el proyecto e instalamos las dependencias necesarias:
  ```
  "dependencies": {
    "bcryptjs": "^2.4.3",
    "cors": "^2.8.5",
    "dotenv": "^16.3.1",
    "express": "^4.18.2",
    "jest": "^29.6.1",
    "joi": "^17.9.2",
    "jsonwebtoken": "^9.0.1",
    "pg": "^8.11.1",
    "supertest": "^6.3.3"
  },
  "devDependencies": {
    "nodemon": "^3.0.1"
  }
  ```

- Crear un nuevo proyecto de npm e instalar todas las dependencias que necesitarás.
- Utilizar el paquete pg para gestionar la comunicación con la base de datos PostgreSQL.
- Implementar la autenticación y autorización de usuarios con JWT.
- Usar el paquete CORS para permitir las consultas de orígenes cruzados.
- Utilizar middlewares para validar las credenciales o token en cabeceras en las rutas que aplique.
- Realizar test de por lo menos 4 rutas de la API REST comprobando los códigos de estados de diferentes escenarios.

## Table of contents

- [Enviroment Variables](#environment-variables)
- [API Reference](#api-reference)
- [Running Tests](#running-tests)
- [Authors](#authors)


## Environment Variables

To run this project, you will need to add the following environment variables to your .env file

`JWT_SECRET`

`PG_URL` 

`PGHOST` 

`PGDATABASE`

`PGUSER`

`PGPASSWORD`

`PGPORT`

`PORT`

**It is only required to have PG_URL or the other PG_ credentials, not both at all.**


## API Reference

### Users Routes

#### Populate the DB (not recommended for a working enviroment)
```http
  GET /seed
```

#### Get all users
```http
  GET /api/v1/users
```

#### Get user by id

```http
  GET /api/v1/users/profile
```

| Header         | Type           | Description                                 |
| :--------------| :------------- | :------------------------------------------ |
| Authorization  | `Bearer Token` | **Required**. Token del usuario del profile |

#### Get user by id

```http
  GET /api/v1/users/{id}
```

| Params         | Type           | Description                                 |
| :--------------| :------------- | :------------------------------------------ |
| id             | `Int`          | **Required**. id usuario del profile        |

#### Login User

```http
  Post /api/v1/users/login
```

| Params         | Type           | Description                                  |
| :--------------| :------------- | :------------------------------------------- |
| email          | `String`       | **Required**. Email del usuario a logearse.  |
| password       | `String`       | **Required**. Password registrada del usuario|

#### Register User

```http
  Post /api/v1/users
```

| Params         | Type           | Description                                  |
| :--------------| :------------- | :------------------------------------------- |
| name           | `String`       | **Required**. Nombre del usuario.            |
| lastName       | `String`       | **Required**. Apellido del usuario           |
| email          | `String`       | **Required**. Email del usuario              |
| password       | `String`       | **Required**. Password del usuario           |
| img_avatar     | `String`       | **Required**. Imagen avatar del usuario      |

#### Modify User

```http
  Put /api/v1/users/{id}
```

| Params         | Type           | Description                                  |
| :--------------| :------------- | :------------------------------------------- |
| name           | `String`       | **Required**. Nombre del usuario.            |
| lastName       | `String`       | **Required**. Apellido del usuario           |
| email          | `String`       | **Required**. Email del usuario              |
| password       | `String`       | **Required**. Password del usuario           |
| img_avatar     | `String`       | **Required**. Imagen avatar del usuario      |

#### Delete User

```http
  Put /api/v1/users/{id}
```

| Params         | Type           | Description                                  |
| :--------------| :------------- | :------------------------------------------- |
| id             | `Integer`      | **Required**. Id del usuario.                |

### Classes Routes

#### Get all classes
```http
  GET /api/v1/classes
```

#### Get class  details by the class id
```http
  GET /api/v1/classes/{id}
```
| Params         | Type           | Description                                  |
| :--------------| :------------- | :------------------------------------------- |
| id             | `Integer`      | **Required**. Id de la clase.                |

#### Get all classes made by an user
```http
  GET /api/v1/classes/users
```
| Header         | Type           | Description                                     |
| :--------------| :------------- | :------------------------------------------     |
| Authorization  | `Bearer Token` | **Required**. Token del creador de las clases   |

#### Create Class
```http
  Post /api/v1/classes
```
| Params       | Type           | Description                                                               |
| :------------| :------------- | :------------------------------------------------------------------------ |
| name         | `String`       | **Required**. Nombre de la clase.                                         |
| subject      | `String`       | **Required**. Asignatura de la clase                                      |
| description  | `String`       | **Required**. Descripcion de la clase                                     |
| level        | `String`       | **Required**. Nivel de dificultad de la clase                             |
| schedule     | `String`       | **Required**. Horario de la clase                                         |
| img          | `String`       | **Required**. Imagen de la clase                                          |
| id_user      | `String`       | **Required**. Se obtiene desde el token, no es un parámetro como tal      |

| Header         | Type           | Description                                |
| :--------------| :------------- | :------------------------------------------|
| Authorization  | `Bearer Token` | **Required**. Token de quien crea la clase |

#### Modify Class
```http
  Put /api/v1/classes/{id}
```
| Params       | Type       | Description                                                          |
| :------------| :--------- | :------------------------------------------------------------------- |             
| name         | `String`   | **Required**. Nombre de la clase.                                    |
| subject      | `String`   | **Required**. Asignatura de la clase                                 |
| description  | `String`   | **Required**. Descripcion de la clase                                |
| level        | `String`   | **Required**. Nivel de dificultad de la clase                        |
| schedule     | `String`   | **Required**. Horario de la clase                                    |
| img          | `String`   | **Required**. Imagen de la clase                                     |
| id_user      | `String`   | **Required**. Se obtiene desde el token, no es un parámetro como tal |

| Header         | Type           | Description                                     |
| :--------------| :------------- | :------------------------------------------     |
| Authorization  | `Bearer Token` | **Required**. Token de quien modifica la clase  |

#### Delete Class
```http
  Delete /api/v1/classes/{id}
```
| Params       | Type           | Description                                  |
| :------------| :------------- | :------------------------------------------- |
| id           | ` String`      | **Required** El id de la clase               |

| Header         | Type           | Description                               |
| :--------------| :------------- | :-----------------------------------------|
| Authorization  | `Bearer Token` | **Required**. Token del dueño de la clase |


### Comments Routes

#### Get all existent comments
```http
  GET /api/v1/comments
```
#### Get the details of a comment
```http
  GET /api/v1/comments/{id}
```
| Params         | Type           | Description                            |
| :--------------| :------------- | :------------------------------------- |
| id             | `Integer`      | **Required**. Id del comentario        |

#### Get all comments made in a class
```http
  GET /api/v1/comments/class/{id}
```
| Params         | Type           | Description                                  |
| :--------------| :------------- | :------------------------------------------- |
| id             | `Integer`      | **Required**. Id de la clase.                |

#### Post a comment
```http
  Post /api/v1/comments
```
| Params         | Type           | Description                                 |
| :--------------| :------------- | :----------------------------------------   |
| id_classes     | `Integer`      | **Required**. Id de la clase que se comenta |
|comment         | `String`       | **Required** Comentario a postear.          |

| Header         | Type           | Description                                     |
| :--------------| :------------- | :---------------------------------------------- |
| Authorization  | `Bearer Token` | **Required**. Token quien escribe el comentario |

### Favorites Routes
#### Get all favorites from the authenticated user.
```http
  GET /api/v1/favorites
```
| Header         | Type           | Description                               |
| :--------------| :------------- | :-----------------------------------------|
| Authorization  | `Bearer Token` | **Required**. Token del usuario           |

#### Get details of a favorites relation
```http
  GET /api/v1/favorites/{id}
```
| Params         | Type           | Description                                  |
| :--------------| :------------- | :------------------------------------------- |
| id             | `Integer`      | **Required**. Id de la relacion de favorito. |

#### Create a favorite.
```http
  Post /api/v1/favorites
```
| Params         | Type           | Description                                  |
| :--------------| :------------- | :------------------------------------------- |
| id             | `Integer`      | **Required**. Id de la clase favorita.       |

| Header         | Type           | Description                                       |
| :--------------| :------------- | :-------------------------------------------------|
| Authorization  | `Bearer Token` | **Required**. Token del usuario que marca favorito|

#### Delete a favorite from the user list.
```http
  Delete /api/v1/favorites/{id}
```
| Params         | Type           | Description                    |
| :--------------| :------------- | :------------------------------|
| id             | `Integer`      | **Required**. Id del favorito. |

| Header         | Type           | Description                                         |
| :--------------| :------------- | :-------------------------------------------------- |
| Authorization  | `Bearer Token` | **Required**. Token del usuario que elimina favorito|

### Ratings Routes
#### Post a rating
```http
  Post /api/v1/ratings
```
| Params         | Type           | Description                                |
| :--------------| :------------- | :----------------------------------------- |
| id_classes     | `Integer`      | **Required**. Id de la clase que se evalua |
| rating         | `Integer`      |**Required** Nota de evaluación             |

| Header         | Type           | Description                               |
| :--------------| :------------- | :-----------------------------------------|
| Authorization  | `Bearer Token` | **Required**. Token quien evalúa          |

#### Get average rating of a class
```http
  GET /api/v1/ratings/class/{id}
```
| Params         | Type           | Description                                  |
| :--------------| :------------- | :------------------------------------------- |
| id             | `Integer`      | **Required**. Id de la clase.                |

#### Get average rating of a user
```http
  GET /api/v1/ratings/user
```
| Header         | Type           | Description                          |
| :--------------| :------------- | :------------------------------------|
| Authorization  | `Bearer Token` | **Required**. Token del usuario      |

### Sales Routes
#### Get all sales.
```http
  GET /api/v1/sales
```
#### Create a sale.
```http
  Post /api/v1/sales
```
| Params         | Type           | Description                          |
| :--------------| :------------- | :----------------------------------- |
| id             | `Integer`      | **Required**. Id del usuario         |
| total          | `Integer`      | **Required**  Total de la venta      |

### Sales Detail Routes
#### Create details of a sale.
```http
  Post /api/v1/sales
```
| Params         | Type           | Description                                 |
| :--------------| :------------- | :------------------------------------------ |
| id_classes     | `Integer`      | **Required**. Id de la clase                |
| id_sales       | `Integer`      | **Required**  Id de la venta                |
| amount         | `Integer`      | **Required**  Canntidad de clases compradas |
| price          | `Integer`      | **Required**  Precio unitario               |

## Running Tests

Para realizar los tests, ejecutar el comando

```bash
  npm run test-exit
```

## Authors

- **Diego Lorca** 
  [![github](https://img.shields.io/badge/github%20profile-000?style=for-the-badge)](https://github.com/Dlorcav77)
- **Alex Fernández** 
  [![github](https://img.shields.io/badge/github%20profile-000?style=for-the-badge)](https://github.com/Arekkusu17)
