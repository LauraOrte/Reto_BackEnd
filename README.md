# Reto_API_Typescript-NodeJS-Sqlite

# Requisitos previos;

Para que el proyecto funcione correctamente, se recomienda tener una serie de programas instalados y configurados adecuadamente:
- [Visual Studio Code](https://code.visualstudio.com/download)
- [Node.js y npm](https://nodejs.org/es/)
- [Typescript](https://www.typescriptlang.org/)
- [SQlite](https://www.sqlite.org/index.html)


# Instalación 

Recuerda ejecutar el siguiente comando en la terminal para instalar las dependencias y que todo funcione correctamente:
```
npm install -g ts-node
```
# Base de datos

Base de datos realizada con SQlite, nombre de la base de datos:
```
database.db
```

# Endpoints
### GET

Devuelve el listado de todas las tareas, título y descripción:
```
/tasks
```

Devuelve la tarea indicando su id:
```
/tasks/:id
```

### POST

Crea una nueva tarea:
```
/tasks
```

### PUT

Modifica una tarea, hay que pasar en el body los parámetros "title" y "desciption":
```
/tasks/:id
```

### DELETE

Elimina una tarea, hay que pasar en el body el parámetro "id":
```
/tasks/:id
```
