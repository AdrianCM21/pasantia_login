# Hola mundo, Login y register
- Instrucciones desponibles en [windows, linux]
### Links utilizados
- Node ^18.17.0: [Pagina de node](https://nodejs.org/es/download)
- MongoDB ^6.0.8: [Pagina de MongoDB](https://www.mongodb.com/try/download/community)

**NOTA:** versiones de las dependencias estan indicadas en el package.json tanto en el servidor y cliente

## Instalación windows
**Versiones probadas:** [windows 10, windows 11], si pruebas con otras versiones y funciona agregar a la lista seria de gran ayuda
### Pre-Instalacion
Para poder ejecutar de el proyecto es necesario le instalar los siguientes programas la instalacion dependiendo de tu sistema operativo podes consultar en la documentacion de los programas indicados para mas detalles, este proyecto fue diseñado con las versiones indicadas, pueden funcionar con versiones posteriores o inferionres cuestion de probar :).

**En windows:** Ir a la pagina principal y descargar el instalador 

## Instalacion proyecto
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
**Versiones probadas:** [ubuntu 22.04], si pruebas con otras versiones y funciona agregar a la lista seria de gran ayuda
### Pre-Instalacion
Lo primero es tener instaldo curl V7.81 con el comando ```sudo apt install curl``` 

**NOTA:** para utilizar sudo deves de ser usuario administrador en las configuraciones de ubuntu pudes activarlo en el apartado de usuarios.
#### NodeJS
Descarga NodeJS V18.17 con el siguiente comamdo 

```curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -```

este comando descargara todas lo nesesario para la instalacion de node, luego instalamos con el siguiente comando 

```sudo apt-get install -y nodejs```

Con esto tendras instalado node y npm con las versiones que el proyecto nesecita-
#### MongoDB V6.0.8
**NOTA:** Instrucciones sacadas de la pagina oficial de mongoDB
Para descargar lo primero es instalar el gnupg con el siguiete comando

```sudo apt-get install gnupg```

Ejecute el siguiente comando para importar la clave GPG pública de MongoDB desde https://pgp.mongodb.com/server-6.0.asc

```curl -fsSL https://pgp.mongodb.com/server-6.0.asc | \sudo gpg -o /usr/share/keyrings/mongodb-server-6.0.gpg \--dearmor```

luego creamos un archivo de lista para MongoDB con el siguiente comando esto dependiendo de tu version de ubuntu en este caso Ubuntu 22.04 (Jammy)

```echo "deb [ arch=amd64,arm64 signed-by=/usr/share/keyrings/mongodb-server-6.0.gpg ] https://repo.mongodb.org/apt/ubuntu jammy/mongodb-org/6.0 multiverse" | sudo tee /etc/apt/sources.list.d/mongodb-org-6.0.list```

**NOTA:** puedes encontrar mas [AQUI](https://www.mongodb.com/docs/manual/tutorial/install-mongodb-on-ubuntu/)

Ejecute el siguiente comando para recargar la base de datos del paquete local:

```sudo apt-get update```

Por ultimo Instalamos la mongoDB con su correspondiente version

```sudo apt-get install -y mongodb-org=6.0.8 mongodb-org-database=6.0.8 mongodb-org-server=6.0.8 mongodb-org-mongos=6.0.8 mongodb-org-tools=6.0.8```

Para iniciar, ver estatus y detene son con los siguientes comandos en orden

```sudo systemctl start mongod```

```sudo systemctl status mongod```

```sudo systemctl stop mongod```

#### GIT 
```sudo apt install git```

## Instalacion proyecto
Para instalar el proyecto en tu máquina local, primero clonamos el repositorio, para esto es nesesario git,
para clonar abrimos la terminal de linux y copias el siguiente link
```bash
git clone https://github.com/AdrianCM21/pasantia_login.git
```

## Cliente

Luego para empezar con el cliente nos ubicamon en la carpeta que se a clonado (pasantia_login) con el comando ```cd pasantia_login```y luego pasamos el cliente con  ```cd client```

en esta ubicaion escribimos y copiamos el siguiete comando
```bash
npm install
```
esto instalara todas las dependencias para el funcionamineto del proyecto 

Luego, inicia el cliente con el siguiente comando:
```bash
npm start
```

y tendriamos listo el cliente corriendo en la ruta localhost:3000

## Servidor

Para iniciar el servidor, Primero abrimos una nueva terminal y nos ubicamos en este caso en la carpeta de server y realizamos los mismos paso que el punto anterior ejecutamos el comando:
```bash
npm install
```
Y tendrias listas todas las dependencias ahora para que el proyecto te funcione nesecitas configurar las variables de entorno
Crea un archivo .env en la carpeta server

```ls > .env```

y agrega las siguientes variables de entorno:
```bash
echo "MONGO_URL=mongodb://0.0.0.0:27017/nombre_que_quiereas
MI_CLAVESECRETA=ylme2" > .env
```
***NOTA:*** No te preocupes si no ves el archivo .env con el comando ls esta ahi. Hay un archivo .env copy de ejemplo. Mongodb no reconose localhost por ello es necesario colocar su equivalente 0.0.0.0. Al colocar el link colocas el numbre de tu tabla pon lo que quieras como indico en el ejemplo. La clave secreta es necesaria pero puedes colocar la que quieras.

Para iniciar el servidor, ejecuta el siguiente comando en la carpeta servidor:
```bash
npm start
```
y listo
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

