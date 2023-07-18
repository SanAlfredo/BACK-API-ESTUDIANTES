#API-ESTUDIANTES-FISICA
Tomar en cuenta que todas las indicaciones son para Sistema Operativo Windows.
1. Una vez descargado el proyecto correr npm init -y, para instalar las dependencias.
2. Antes de usar sequelize instalar con cmd admin
  npm install -g sequelize-cli
  npm install -g sequelize
  luego añadir al path 
  C:\Users\WINDOWS 10\AppData\Roaming\npm\node_modules\sequelize-cli\lib\sequelize
3. Crear una base de datos en MySQL llamada "fisica".
    * Configurar el archivo .env.example con sus datos de su base de datos.
    * Configurar el archivo config.json que está dentro la carpeta config de la siguiente forma:
      "development": {
        "username": "UsuariodelaBaseDeDatos",
        "password": "Contrasenia",
        "database": "BaseDeDatos",
        "host": "URLBaseDeDatos",
        "dialect": "mysql"
      }
4. Desde la raiz, abrir terminal y correr con "npm run dev"
5. Desde otra terminal correr el comando "sequelize db:seed:all"
