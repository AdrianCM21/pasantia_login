# Hola mundo, Login y register

## Pre-Instalacion
Para poder ejecutar de el proyecto es necesario le instalar los siguientes programas la instalacion dependiendo de tu sistema operativo podes consultar en la documentacion de los programas indicados para mas detalles, este proyecto fue diseñado con las versiones indicadas, pueden funcionar con versiones posteriores o inferionres cuestion de probar :).

**En windows:** Ir a la pagina principal y descargar el instalador 
**En Linux:** Asegurarte de tener instalado curd con este comando 
```sudo apt install```

### Links
- Node ^18.17.0: [Pagina de node](https://nodejs.org/es/download)
- MongoDB ^6.0.8: [Pagina de MongoDB](https://www.mongodb.com/try/download/community)

**NOTA:** versiones de las dependencias estan indicadas en el package.json tanto en el servidor y cliente

## Instalación windows
**Versiones probadas:** [windows 10, windows 11], si pruebas con otras versiones y funciona agregar a la lista seria de gran ayuda

Para instalar el proyecto en tu máquina local, primero clonamos el repositorio, para esto es nesesario git,
para clonar abrimos la terminal powershell en Windows funciona y copias el siguiente link
```bash
git clone https://github.com/AdrianCM21/pasantia_login.git
```

## Cliente

Luego para empezar con el cliente nos ubicamon en la carpeta que se a clonado (pasantia_login) y abrimos la terminal posterior nos movemos a la carpeta clientes con el comando ```cd client```

en esta ubicaion escribimos y copiamos el siguiete comando
```bash
npm install
```
esto instalara todas las dependencias para el funcionamineto del proyecto 

Luego, inicia el cliente con el siguiente comando:
```bash
npm start
```
## Servidor

Para iniciar el servidor, Primero abrimos una nueva terminal y nos ubicamos en este caso en la carpeta de servert y realizamos los mismos paso que el punto anterior ejecutamos el comando:
```bash
npm install
```
Y tendrias listas todas las dependencias ahora para que el proyecto te funcione nesecitas configurar las variables de entorno
Crea un archivo .env en la carpeta servidor y agrega las siguientes variables de entorno:
```bash
MONGO_URL="mongodb://0.0.0.0:27017/nombre_que_quiereas"
MI_CLAVESECRETA="ylme2"
```
***NOTA:*** Hay un archivo .env copy de ejemplo. Mongodb no reconose localhost por ello es necesario colocar su equivalente 0.0.0.0. Al colocar el link colocas el numbre de tu tabla pon lo que quieras como indico en el ejemplo. La clave secreta es necesaria pero puedes colocar la que quieras.

Para iniciar el servidor, ejecuta el siguiente comando en la carpeta servidor:
```bash
npm start
```

## Instalación Linux


## Tecnologías utilizadas

El proyecto se desarrolló utilizando las siguientes tecnologías:

### Cliente
- formik
- sweetalert2
- env
- React
- React Router DOM
- Animate.css
- Axios

### Servidor

- Node.js
- Express.js
- MongoDB
- Express-validator
- Jsonwebtoken
- Bcryptjs
- Axios
- Cors

## Contribuir

Si deseas contribuir al proyecto, puedes hacer un fork del repositorio y enviar tus cambios en un pull request.

## Licencia

Este proyecto utiliza la licencia MIT.
