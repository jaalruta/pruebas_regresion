## Estudiantes
Nuestro equipo está conformado por 4 integrantes.
|Nombre |Correo|
|--|--|
|Jair Alexander Rueda Tapiero |ja.ruedat1@uniandes.edu.co   |
|Andres Felipe Rodriguez Nuñez|af.rodriguezn@uniandes.edu.co  |
|Juan Esteban Otálvaro Alzate |j.otalvaro@uniandes.edu.co     |
|Ilse Milena Villalba Mantilla|im.villalba1240@uniandes.edu.co|

# Pruebas de regresion visual

## Estructura del repositorio
En el repositorio se podran encontrar cuatro carpetas las cuales se explicaran a continuacion
- ghost_3_42 : Contiene los 40 escenarios realizados para la version 4.41.3 de ghost , al correr los escenarios se presentan fallas ya que los ids de los campos son totalmente diferentes 
  - cypress : Pruebas realizadas con cypress
  - Kraken : Pruebas realizadas con kraken
- ghost_3_42_corregido: Contiene los 10 escenarios (5 para kraken y 5 para cypress) ajustados a esta version.
  - cypress : Pruebas realizadas con cypress
  - Kraken : Pruebas realizadas con kraken
- ghost_4_41_3 : Contien los 40 escenarios iniciales de la entrega de la semana 5
  - cypress : Pruebas realizadas con cypress
  - Kraken : Pruebas realizadas con kraken
- regresion : Contiene el script que genere el reporte , en la seccion ***Correr el reporte*** se explica las condiciones de ejecucion y la forma de ejecutar el script

## Impacto en la ejecucion de las pruebas de la version 4.41.3 sobre la version 3.42.0

En general todas las pruebas fallaron inicialmente debido a que los ids del login cambiaron , se ajusto el login pero las pruebas siguiero fallando ya que los pasos para generar la misma funcioalidad son diferentes entre las versiones , en conclusion el impacto fue muy alto ya que ninguna prueba funciono.

## Implementacion de captura de pantalla

Para implementar la captura de pantalla se realizo lo siguiente

- Kraken : 
  En el archivo de step.js definimos un hook el cual se denomina Before , en este hook capturamos el nombre del feature que se esta ejecutando y lo     guardamos en una variable global , luego de esto creamos el directorio donde se guardaran las capturas que sera llamado "capturas" y dentro de este directorio crearemos una carpeta para cada feature tomando el nombre del feature que capturamos , si existe ya una carpeta con el nombre del feature borramos el contenido para generar de nuevo las capturas.
  
  Tambien se definio un contador para que cada vez que se tome una captura se incremente y asi manejar un consecutivo en los nombres de las imagenes, las imagenes son tomadas en el When "I take a screenshot" , por defecto el nombre de la imagen sera "screenshot" seguido del valor del contador y la extension png.
  
- Cypress : 
  Dentro de cada archivo de la carpeta integation implementamos la funcionalidad para tomar capturas de pantalla, a diferencia de kraken en este archivo se debe indicar el nombre del archivo incluyendo el consecutivo.
  

## Sistema Bajo Pruebas

El sistema bajo pruebas usado es [Ghost](https://ghost.org/) en su versión 4.41.3. y la version 3.42.0

Ghost es un sistema gestor de contenidos para la creación de publicaciones en línea de código libre

## Funcionalidades Core usadas en las pruebas

Para las pruebas expuestas en este repositorio se usaron las siguientes funcionalidades de Ghost
- Post : Funcionalidades para la creación,edición y borrado de post.
- Páginas : Funcionalidades para la creación,edición y borrado de páginas.
- Etiquetas : Funcionalidades para la creación,edición y borrado de etiquetas.
- Miembros : Funcionalidades para la creación de miembros de ghost y edición de los mismos.
- Staff : Funcionalidades para la invitación de miembros del staff, y edición de los mismos.
- Configuracion Ghost : Funcionalidades que permiten la configuración de Ghost para el caso de estas pruebas se usaron la configuración de zona horaria y cambio de lenguaje

Todas las anteriores hacen uso de la funcionalidad de inicio de sesión

## Escenarios generados en las pruebas

A continuación se listan los escenarios generados los cuales usan varias funcionalidades de la aplicación.

1. Crear Post : En este escenario se inicia sesión , se usa la opción de crear post  , se ingresan datos del título y cuerpo del post , se guarda el post y se publica de inmediato.
2. Editar Post : En este escenario se inicia sesión , se crea un post, se selecciona un post ya creado , se modifican los datos y se guardan las modificaciones.
3. Borrar Post : En este escenario se inicia sesión , se crea un post, se selecciona un post ya creado y se realiza el borrador del post.
4. Crear Post Programado : En este escenario se inicia sesión , se usa la opción de crear post , se ingresan datos del título y cuerpo del post , se guarda el post y se programa una hora de publicación.
5. Crear Página : En este escenario se inicia sesión , se usa la opción de crear pagina  , se ingresan datos del título y cuerpo de la página , se guarda la página y se publica de inmediato.
6. Editar Página : En este escenario se inicia sesión , se selecciona una página ya creada , se modifican los datos y se guardan las modificaciones.
7. Borrar Página : En este escenario se inicia sesión , se selecciona una página ya creada y se realiza el borrador de la página.
8. Crear página programa : En este escenario se inicia sesión , se usa la opción de crear pagina , se ingresan datos del título y cuerpo de la página , se guarda la página y se programa una hora de publicación.
9. Crear Miembro : En este escenario se inicia sesión , se selecciona la opción de miembros ,se usa el botón de crear miembro , se ingresan los datos del miembro a crear y se realiza el guardado de los datos.
10. Editar miembro : En este escenario se inicia sesión , se selecciona la opción de miembros , se selecciona un miembro existente , se modifican los datos del miembro y se realiza el guardado de los cambios.
11. Eliminar Miembro : En este escenario se inicia sesión , se selecciona la opción de miembros , se selecciona un miembro existente  y se realiza el borrado del miembro.
12. Crear etiqueta : En este escenario se inicia sesión , se selecciona la opción de etiquetas , se usa el botón de crear etiqueta, se ingresan los datos para la creación de la etiqueta y se guardan los datos.
13. Edición etiqueta : En este escenario se inicia sesión , se selecciona la opción de etiquetas ,se selecciona una etiqueta creada , se modifican los datos y se guardan los cambios.
14. Borrar etiqueta : En este escenario se inicia sesión , se selecciona la opción de etiquetas ,se selecciona una etiqueta creada , y se realiza el borrado de la etiqueta.
15. Editar nombre de la aplicación : En este escenario se inicia sesión , se usa el botón de configuración , se ingresa a la opción general , Se expande el panel de título y descripción y se modifica el título de la aplicación.
16. Editar zona horaria : En este escenario se inicia sesión , se usa el botón de configuración , se ingresa a la opción general , Se expande el panel de zona horaria y se modifica la zona horaria.
17. Editar leguaje de publicación :  En este escenario se inicia sesión , se usa el botón de configuración , se ingresa a la opción general , Se expande el panel de lenguaje de publicación y se modifica el lenguaje.
18. Invitar staff : En este escenario se inicia sesión , se usa el botón de configuración, se ingresa a la opción de staff , se usa el botón de crear staff , se ingresan los datos de creación y se guardan los datos.
19. Revocar invitación staff : En este escenario se inicia sesión , se usa el botón de configuración, se ingresa a la opción de staff y se revoca la invitación de un miembro que aún no aceptara la invitación.
20. editar staff : En este escenario se inicia sesión , se usa el botón de configuración, se ingresa a la opción de staff , se selecciona un miembro del staff y se realiza la actualizacion de datos.






## Requisitos para la ejecución de las pruebas

- [node](https://nodejs.org/es/blog/release/v16.13.0/) version 16.13.0
- [npm](https://www.npmjs.com/) (se instala junto con node)
- [git](https://git-scm.com/)
- [Google Chrome](https://www.google.com/intl/es-419/chrome/)
- adb (android debub bridge) Instrucciones de instalacion en mac en este [link](https://stackoverflow.com/questions/17901692/set-up-adb-on-mac-os-x) , para windows en este [link](https://youtu.be/tYY7FTV31vM) , para linux en este [link](https://blog.desdelinux.net/como-instalar-adb-shell-y-fastboot-en-linux/)
- [Ghost](https://ghost.org/) version 4.41.3 y version 3.42 , para la instalacion se debe crear un directorio vacio y correr los siguientes comandos dentro del directorio creado (el siguiente ejemplo es para la version 4.41.3 , se debera realiza lo mismo en directorio diferente para la version 3.42) 

  ```
  npm install ghost-cli@latest -g
  ```
  y luego
  ```
  ghost install 4.41.3 --local
  ```
  con lo anterior Ghost debería estar en ejecución en la máquina local en la url http://localhost:2368/ghost/
 
  Al ingresar por primera vez deberá crear el perfil administrador ***No pierda estos datos ya que son necesarios para las pruebas***
 
- Cypress , una vez instalado node y npm se debe instalar cypress con el siguiente comando
  ```
  npm install -g cypress
  ```

si se quiere parar la ejecucion de una version de ghost se debe usar el comando 

  ```
  ghost stop
  ```

- La url de ghost debera ser http://localhost:2368/ es decir debe estar corriendo en la maquina local y en el puerto 2368

## Ejecución de pruebas

Cuando tengamos listos los requisitos podremos clonar el repositorio usando el comando

```
git clone <URL_REPOSITORIO>
```

esto nos generará un directorio con las carpetas ghost_3_42,ghost_3_42_corregido,ghost_4_41_3 y regresion , la explicacion de cada carpeta esta en la seccion previa llamada ***Estructura del repositorio***

![Captura de pantalla 2022-05-14 a la(s) 7 18 33 p  m](https://user-images.githubusercontent.com/98671337/168452337-8e4036a5-167a-47ac-9bb2-7a46000398fc.png)


### Inicialización de ghost

Asegúrese que Ghost esta en ejecucion ingresando a http://localhost:2368/ghost/ de lo contrario ir a la carpeta de instalación de ghost y ejecutar

```
ghost start
```

### Ejecución de pruebas con Kraken

Se debe configurar el usuario y clave de administrador de Ghost , para esto nos dirigiremos al archivo /kraken/properties.json , debemos editarlo y agregar el usuario y la contraseña, a continuación se visualiza un ejemplo :

![Captura de pantalla 2022-05-05 a la(s) 10 51 49 p  m](https://user-images.githubusercontent.com/98671337/167064103-e9e30bd9-dc77-417c-877d-13a958e94aed.png)



Para la ejecución de pruebas en kraken debemos dirigirnos al directorio kraken de la version de ghost que queramos probar usando la consola bash , dentro de este directorio usaremos el comando

```
npm install
```
con este comando se instalarán las dependencias necesarias para la ejecución de las pruebas, luego de esto podremos ejecutar las pruebas con el comando en el mismo directorio kraken
```
./node_modules/kraken-node/bin/kraken-node run
```

se abre chrome y se comenzarán a ejecutar las pruebas
![Captura de pantalla 2022-05-05 a la(s) 10 47 31 p  m](https://user-images.githubusercontent.com/98671337/167063860-f839b7e6-38e1-488e-8fe3-45b3406a7883.png)


### Ejecución de pruebas con Cypress

Se debe configurar el usuario y clave de administrador de Ghost , para esto nos dirigiremos al archivo /cypress/cypress.json del directorio con la version de ghost que queremos probar, debemos editarlo y agregar el usuario y la contraseña, a continuación se visualiza un ejemplo :

![Captura de pantalla 2022-05-05 a la(s) 11 49 07 p  m](https://user-images.githubusercontent.com/98671337/167069026-5cfb1e10-e713-4f36-af41-96fc9a282024.png)

Para la ejecución de las pruebas con Cypress se debe ejecutar el siguiente comando (en ocasiones es necesario ejecutarlo con privilegios de administrador)

```
cypress open
```

Se abrirá la siguiente interfaz

![Captura de pantalla 2022-05-05 a la(s) 10 55 31 p  m](https://user-images.githubusercontent.com/98671337/167064359-f65996fc-0d57-435c-b379-aa8b2868c936.png)


Debemos seleccionar la carpeta cypress del directorio con la version de ghost que queremos probar obtenidas del repositorio clonado
![Captura de pantalla 2022-05-05 a la(s) 10 57 06 p  m](https://user-images.githubusercontent.com/98671337/167064499-af4e49ab-760b-4bc8-a9fd-35e4c9069dbf.png)

En este punto se nos permitirá ejecutar los test, para los test sobre Ghost debemos buscar la sección ***3-Ghost***

![Captura de pantalla 2022-05-05 a la(s) 10 59 38 p  m](https://user-images.githubusercontent.com/98671337/167064690-1d33a3db-8faf-4334-9dcd-4e6d5035dff6.png)

Luego podremos seleccionar cualquier test del listado , se abrirá un navegador y se ejecutara la prueba

![Captura de pantalla 2022-05-05 a la(s) 11 00 51 p  m](https://user-images.githubusercontent.com/98671337/167064809-25649edc-bdf5-4f3c-b95c-e08eb8ab2f3f.png)


# Generación de reporte de regresión

Dentro del repositorio existe una carpeta que se llama ***regresion*** , en esta carpeta se encuentra el script que genera el reporte , para configurar el reporte se debe tener en cuenta lo siguiente

## Archivo de configuración

El archivo ***config.json*** contiene la configuración del reporte ,  a continuacion se explicaran las opciones de configuración 
- titulo_reporte : Sera el titulo del reporte general
- destino_reporte : Es el path en donde se ubicara el reporte de resultados
- comparaciones : es un arreglo en el cual se asocian los directorios a comparar y el nombre del escenario de comparacion.
   - nombre : Nombre del escenario
   - directorio1 : Directorio 1 a comparar
   - directorio2 : Directorio 2 a comparar
- resemble_config : Es un objeto con la configuracion de resemble 

## Consideraciones antes de correr el reporte
- Ambos directorios deben tener la misma cantidad de imagenes
- La extension de la imagen debe ser ***png***
- Se debe validar que las rutas de comparacion en el archivo de configuración esten correctas
- Es ideal que los nombres de las imagenes a comparar sea el mismo debido a que el script recorre las imagenes en orden ascendente
## Correr el reporte

La primera vez que se ingresa al directorio se debe correr el comando 

 ```
  npm install
 ```

con esto se instalaran las dependencias necesarias para la correcta ejecucion del reporte.

Luego se debe ejecutar el comando 

 ```
  node index.js
 ```
  
 Con esto se iniciara la comparacion y se generara el reporte de regresion visual
 
 Se generara una pagina principal con las comparaciones generadas
 ![Captura de pantalla 2022-05-14 a la(s) 9 16 44 a  m](https://user-images.githubusercontent.com/98671337/168429611-a3d4f9da-c720-4f4e-9e49-241301561854.png)

y para cada comparacion un reporte detallado 
![Captura de pantalla 2022-05-14 a la(s) 9 16 51 a  m](https://user-images.githubusercontent.com/98671337/168429633-86576627-f695-47c1-9c9b-f78b61df8c92.png)

## Acceso al reporte de incidencias
Los accesos al reporte de incidencias estaran ***en el mensaje del cuerpo de la entrega***, esto debido a que contienen usuario y contraseña de Jira

