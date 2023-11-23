## Lista de Contenido
1. [Información Gerenal](#Información-General)
2. [Tecnologias](#Tecnologias)
3. [Instalación](#Instalacion)
4. [FAQs](#faqs)
### Información General
***
## MovieHub
Estado del Proyecto: En Desarrollo

**Características Principales:**
Registro de Usuario/Admin:
La aplicación MovieHub presenta un sistema de registro y autenticación que permite a los usuarios crear cuentas estándar y a los administradores acceder a funciones adicionales.

**Catálogo de Películas:**
MovieHub proporciona a los usuarios un completo catálogo de películas, facilitando la exploración y búsqueda de películas por diversos criterios como título, género, año, entre otros. Cada película en el catálogo muestra detalles detallados, incluyendo título, género, director, reparto y una calificación promedio.

**Guardado de Películas:**
Los usuarios tienen la capacidad de guardar películas en su catálogo personal. Esta funcionalidad permite a los usuarios crear listas personalizadas de películas favoritas o por ver más adelante.

**Calificación y Reseñas:**
La aplicación permite a los usuarios calificar las películas en una escala del 1 al 10 y escribir reseñas detalladas si lo desean. Además, los usuarios pueden explorar y visualizar las calificaciones y reseñas de otras personas.

**Administración:**
Los usuarios con roles de administrador tienen acceso a un panel especial de administración. Desde este panel, los administradores pueden gestionar películas, usuarios y reseñas. Pueden realizar acciones como agregar o eliminar películas, gestionar usuarios o moderar reseñas para mantener la calidad y relevancia del contenido.

**¡Bienvenido a MovieHub, tu destino cinematográfico personalizado!**

## Tecnologias
***
A list of technologies used within the project:

* [Node.js](https://nodejs.org/en): Version 14.18.2
* [Express.js](https://expressjs.com/): Version 4.18.2
* [Sequelize](https://sequelize.org/): Version 6.34.0 (ORM para bases de datos relacionales)
* [MySQL2](https://www.npmjs.com/package/mysql2): Version 3.6.2 (base de datos relacional)
* [Bcrypt](https://www.npmjs.com/package/bcrypt): Version 5.1.1 (para el cifrado de contraseñas)
* [Cookie-parser](https://www.npmjs.com/package/cookie-parser): Version 1.4.6 (para el manejo de cookies)
* [Jsonwebtoken](https://www.npmjs.com/package/jsonwebtoken): Version 9.0.2 (para la autenticación basada en tokens)
* [Dotenv](https://www.npmjs.com/package/dotenv): Version 16.3.1 (para cargar variables de entorno desde un archivo)
* [Define-data-property](https://www.npmjs.com/package/define-data-property): Version 1.1.1 (dependencia para el manejo de propiedades de datos)
* [Lodash](https://lodash.com): Version 4.17.21 (biblioteca de utilidades)
* [nodemon](https://www.npmjs.com/package/nodemon): nodemon: Versión 3.0.1 (para reiniciar automáticamente el servidor)
## Instalación
***
Una breve introducción sobre la instalación:
```
$ git clone https://github.com/sgimenezivan/tp-movies-back
$ cd ../ruta/a/la/carpeta
$ npm install
Si lo queremos correr en producción o en ambiente Demo:
$ npm start
```

## Preguntas Frecuentes (FAQ)
***

1. **¿Qué es MovieHub?**
   - MovieHub es una aplicación que proporciona a los usuarios un catálogo de películas, permitiéndoles explorar, buscar, calificar y revisar películas. También incluye funciones de registro de usuarios y administración de contenido.

2. **¿Cómo puedo registrarme en MovieHub?**
   - Puedes registrarte en MovieHub creando una cuenta de usuario. Haz clic en el botón de registro, completa la información requerida y sigue los pasos indicados.

3. **¿Cómo guardo películas en mi catálogo personal?**
   - Después de iniciar sesión, puedes guardar películas en tu catálogo personal haciendo clic en la opción "Guardar" o "Añadir a mi catálogo" en la página de detalles de cada película.

4. **¿Puedo escribir reseñas y calificar películas?**
   - Sí, MovieHub permite a los usuarios calificar películas en una escala del 1 al 10 y escribir reseñas detalladas. Esta función está disponible en la página de detalles de cada película.

5. **¿Cómo accedo al panel de administración?**
   - Si tienes un rol de administrador, podrás acceder al panel de administración iniciando sesión y haciendo clic en la opción de administración en tu perfil de usuario.

6.  **¿Qué tecnologías utiliza MovieHub?**
   - MovieHub utiliza diversas tecnologías, incluyendo Express, Sequelize, MySQL, y otras. Puedes encontrar la lista completa de tecnologías y sus versiones en el archivo `package.json` del proyecto.

8. **¿Cómo puedo reportar problemas o sugerir mejoras?**
   - Si encuentras problemas o tienes sugerencias para mejorar MovieHub, puedes escribirnos a sugerencias@moviehub.com. Agradecemos tu colaboración.
