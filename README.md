# SCI-FI MOVIES

## Índice


* [1. Diseño de la Interfaz](#1-diseño-de-la-interfaz)
* [2. Definición del producto](#2-definicion-del-producto)
* [3. Historias de usuaria](#3-historias-de-usuaria)
* [4. Implementación de la Interfaz de Usuaria (VITE/REACT/TYPESCRIPT/CSS/HTML)](#4-implementacion-de-la-interfaz-de-usuaria)

***


## 1. Diseño de la Interfaz

Diseñamos la página siguiendo los prototipos de baja fidelidad que nos propusieron,
pero implementando estilos con letras en tonos aqua con fondo oscuro, los estilos 
de letra que agregamos son mas rectos, con espacios entre ellos agregando detalles 
dependiendo la necesidad de cada vista de la SPA.

Al inicio del proyecto y tomando como base el prototipo de baja fidelidad, creamos
el prototipo de alta fidelidad pensando en que ibamos a presentar peliculas de 
Ciencia Ficción, realizamos las primeras vistas y este fue el resultado.



## Prototipos de baja fidelidad

El Product Owner nos entrega una primera iteración del prototipo de baja fidelidad 
de la aplicación.


<img width="703" alt="Captura de pantalla 2024-02-14 a la(s) 10 36 44 a m" src="https://github.com/ViZacatzi/DEV012-movie-challenge-fw/assets/145049256/3d780f1e-db9e-490a-bb53-324b6f2ddc60">

Vista de Home


<img width="696" alt="Captura de pantalla 2024-02-14 a la(s) 10 37 30 a m" src="https://github.com/ViZacatzi/DEV012-movie-challenge-fw/assets/145049256/89028894-9499-4a28-b115-527ab4706353">

Vista Detalle de pélicula



## Prototipos de alta fidelidad

Siguendo el prototipo de baja fidelidad, se creo estos prototipos, tomando en 
cuenta que se iban a presentar peliculas de Ciencia Ficción apoyandonos de colores
obcuros de fondo pero resaltando titulos y tarjetas con colores aqua brillantes, 
este es el resultado.

<img width="865" alt="Captura de pantalla 2024-02-14 a la(s) 10 42 10 a m" src="https://github.com/ViZacatzi/DEV012-movie-challenge-fw/assets/145049256/3b3b5a46-5e67-4914-a60f-7cec84e92ca5">


Vista Home

<img width="779" alt="Captura de pantalla 2024-02-14 a la(s) 10 42 27 a m" src="https://github.com/ViZacatzi/DEV012-movie-challenge-fw/assets/145049256/1de569f1-8143-4d25-a90d-3ef3840ce46a">

Vista Detalle de película



## 2. Definición del producto

Al ser una pagina SPA donde el reto era implementar diferentes vistas, primero 
decidimos modificar un poco la primera vista del home, detalles como el nombre
del header, los tipos de selectores para los filtros y las tragetas con un poco
de interación cuando el usuario pasa el raton por las targetas o filtros. 

Aunque cada vista tenia su propio diseño único que la caracteriza y resalta
su usabilidad.


## 3. Historias de usuaria

La página es dirigida para usuarias amantes de las películas de Ciencia Ficción.

[Historia de usuario 1] 
La primera Historia de Usuario fue para implementar el listado de películas usando 
el siguiente enunciado: "Yo como usuaria quiero visualizar en un tabla (filas y columnas)
el catálogo de películas" Cada película muestra un poster, el título original y año de 
lanzamiento.

[Historia de usuario 2] 
La segunda Historia de Usuario fue para implementar el filtro y ordenamiento de las 
películas usando el siguiente enunciado: "Yo como usuaria quiero filtrar y ordenar 
el catálogo de películas usando los criterios soportados por TheMovie Database API V3"
La paginación conserva el filtro y ordenamiento y cada película muestra un poster, el 
título original y año de lanzamiento.

[Historia de usuario 3] 
La tercera Historia de Usuario fue para implementar el detalle de una película usando 
el siguiente enunciado: "Yo como usuaria quiero consultar los detalles de una película"
Se utiliza el endpoint /movie/{movie_id} y se muestra el poster, título original, 
año de lanzamiento y total de votos. Además la interfaz permite retornar al listado 
de películas con un botón.


## 4. Implementación de la Interfaz de Usuaria (VITE/REACT/TYPESCRIPT/CSS/HTML)

La aplicación esta creado con Vite y React, se crearon diferentes componentes que se
van a reutilizar en  las diferentes vistas. En cuanto a el diseño se trabajo con CSS 
el flex-box para los diferentes componentes que existen en la página, que se haga
responsive, los diferentes los colores y las imagenes implementadas.
Y finalmente se trabajo toda la lógica del proyecto con el framework de React que nos
ayudo a la apliciación a ser dinamica, en cuanto a la aplicación de la Rutas, se 
utilizo la libreria  de React Route Dom que nos ayudo a implementar el boton que 
redireccionan a las diferentes vistas, las tarjetas también con la funcionalidad 
que llevan al detalle de cada pelicula.

Finalmente este fue el resultado final.

<img width="1141" alt="Captura de pantalla 2024-02-14 a la(s) 11 31 03 a m" src="https://github.com/ViZacatzi/DEV012-movie-challenge-fw/assets/145049256/a0ed1802-bdd5-4ad3-a050-a14326d3f1fd">
Vista Home


<img width="1274" alt="Captura de pantalla 2024-02-14 a la(s) 11 30 39 a m" src="https://github.com/ViZacatzi/DEV012-movie-challenge-fw/assets/145049256/0c0d6d47-e851-4199-b170-459cf174f690">
Vista Detalle

