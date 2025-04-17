# 🧩 Angular Auth + Dashboard + Theme Switcher

Este proyecto es una aplicación frontend desarrollada en **Angular 12**, que incluye:
- Módulo de autenticación con formulario reactivo
- Dashboard protegido con AuthGuard
- Estructura modular y escalable
- Sistema de cambio de tema claro/oscuro usando variables SCSS
- Estilos globales para inputs y botones en todos sus estados

---

## ✅ Versiones de herramientas utilizadas

| Herramienta       | Versión        |
|-------------------|----------------|
| Angular CLI       | 12.2.17        |
| Node.js           | 14.21.3        |
| npm               | 6.14.18        |
| PrimeNG           | 12.2.3         |
| Chart.js          | 2.9.4          |
| Bootstrap         | 5.1.3          |

---

## ▶️ Cómo ejecutar el proyecto

Paso    Comando	        Descripción
-----------------------------------------
1️⃣	    npm install	    Instala todas las dependencias del proyecto.
2️⃣	    npm start	    Inicia el servidor de desarrollo en http://localhost:4200.

💡 Asegurate de tener instalado Node.js 14.21.3 y npm 6.14.18 para compatibilidad total con Angular 12.

## 🧪 Lote de pruebas (casos de prueba funcionales)

- ✅ Acceso a `/dashboard` solo si el usuario está autenticado
- ✅ Validación de login reactiva (campos requeridos), si no estan completos no se habilita el boton (ambos deben tener minimos 6 caracteres )
- ✅ Cambio de tema persistente entre recargas (localStorage)
- ✅ Variables SCSS dinámicas aplicadas en toda la UI
- ✅ Botones e inputs adaptados visualmente a cada 

Estos son los casos de pruebas que se pueden usar para loguearse

Nombre  | Email             | Contraseña
------------------------------------------------
- Juan    | juan@mail.com     | 123456password
- Ana     | ana@mail.com      | 456789password
- Carlos  | carlos@mail.com   | 246810password
- Mateo   | mateo@mail.com    | 123456

---

## 🧱 Descripción de componentes creados y su configurabilidad

📊 DynamicTableComponent --------------------------------
Componente reutilizable para mostrar tablas dinámicas con soporte para filtrado, paginación, ordenamiento personalizado y eventos al seleccionar una fila, basado en PrimeNG.

🔧 Parámetros de entrada (@Input())

Propiedad | Tipo | Descripción
-----------------------------------
- title | string | Título visible de la tabla. (Default: 'Tabla dinámica')
- canFilter | boolean | Habilita o desactiva el filtrado de datos.
- isGlobalFilter | boolean | Si es true, filtra en todas las columnas (excepto las de tipo icon).
- showPaginator | boolean | Muestra el paginador al pie de la tabla.
- definedColumns | any[] | Columnas a aplicar filtro si isGlobalFilter está en false.
- columns | any[] | Estructura de columnas completa (clave, tipo, nombre, etc.).
- data | any[] | Conjunto de datos que se renderizan en la tabla.
- rowsPerPage | any[] | Conjunto que indica las posibles cantidades de registros por página. (Default: [10, 25, 5])
- rows | number | Cantidad de registros a mostrar inicialmente. (Default: 10)
- pageSize | number | Cantidad de registros por página. (Default: 4)
- isLoading | boolean | Muestra estado de carga (ej: spinner o skeleton).
- errorData | boolean | Permite mostrar mensajes o fallback en caso de error en los datos.

📤 Eventos de salida (@Output())

Evento | Tipo | Descripción
-----------------------------------
- rowClicked | EventEmitter<any> | Se emite al hacer clic en una fila, retorna { product, key }.

⚙️ Funcionalidades
customSort(event)
Ordena los datos manualmente en base a field y order. Evita depender 100% del ordenamiento de PrimeNG.

clear(table: Table)
Limpia los filtros activos y reinicia la búsqueda global.

onRowSelect(registro)
Emite la fila seleccionada al componente padre para permitir acciones personalizadas.

🔍 Lógica de filtrado
Si isGlobalFilter = true → filtra por todas las columnas excepto las de tipo "icon".

Si isGlobalFilter = false → filtra únicamente por las columnas listadas en definedColumns.

📌 NavbarComponent----------------------------------------------------
Componente de navegación principal que muestra el estado de sesión, el nombre del usuario logueado y permite cerrar sesión o cambiar el tema de la aplicación. Forma parte del layout general de la app y se muestra en todas las vistas principales.

🔧 Parámetros de entrada (@Input())

Propiedad | Tipo | Descripción
----------------------------------
- isUserLogged | boolean | Indica si hay un usuario autenticado. Muestra opciones según sesión activa.
- userName | string | Nombre del usuario logueado, mostrado en la barra.

📤 Eventos de salida (@Output())

Evento | Tipo | Descripción
-------------------------------
- finishSession | EventEmitter<any> | Se emite al hacer clic en "Cerrar sesión".
- changeThemes | EventEmitter<any> | Se emite al hacer clic en el ícono de cambio de tema.

🧠 Funcionalidades
changeTheme()
Emite un evento para cambiar el tema entre light y dark. Se recomienda manejar el cambio desde el componente padre o un ThemeService.

terminarSesion()
Emite un evento que permite cerrar sesión desde el componente padre. Este puede borrar datos del localStorage y redirigir al login.

iconThemeName (getter)
Devuelve el ícono correcto según el tema actual guardado en localStorage.

pi pi-sun → tema oscuro activo

pi pi-moon → tema claro activo

📈 DoughnutChartComponent---------------------------------------------------------
Componente que encapsula un gráfico de tipo doughnut (anillo) basado en PrimeNG. Es usado para mostrar datos estadísticos en forma visual, permitiendo emitir eventos al hacer clic en un segmento del gráfico.

🔧 Parámetros de entrada (@Input())

Propiedad | Tipo | Descripción
---------------------------------
- data | any | Datos del gráfico, en el formato aceptado por Chart.js y PrimeNG.

📤 Eventos de salida (@Output())

Evento | Tipo | Descripción
-------------------------------
-selectDataEmitter | EventEmitter<any> | Se emite al seleccionar un dato del gráfico (clic en un segmento).
🧠 Funcionalidades
selectData(data)
Se ejecuta cuando el usuario hace clic en una sección del gráfico y emite la información relacionada (etiqueta, valor, etc.) al componente padre.

ℹ️ Observaciones! 
Este componente utiliza el componente <p-chart> de PrimeNG, configurado para mostrar gráficos de tipo doughnut.

Es muy similar al BarChartComponent, ya que ambos se apoyan en la misma base (Chart.js + PrimeNG).

En este proyecto se utilizan con configuración básica, pero ambos permiten gran personalización en casos más complejos (colores, tooltips, leyendas, eventos, animaciones, etc.).

🧭 NavbarComponent
Componente de navegación principal que aparece en la parte superior de la aplicación. Muestra el estado de sesión del usuario y permite realizar acciones como cerrar sesión o cambiar el tema de la interfaz (claro/oscuro).

🔧 Parámetros de entrada (@Input())

Propiedad | Tipo | Descripción
-------------------------------
- isUserLogged | boolean | Define si el usuario está logueado. Permite mostrar opciones condicionales.
- userName | string | Nombre del usuario a mostrar en la barra de navegación.

📤 Eventos de salida (@Output())

Evento | Tipo | Descripción
-----------------------------
- finishSession | EventEmitter<any> | Se emite al hacer clic en “Cerrar sesión”.
- changeThemes | EventEmitter<any> | Se emite al hacer clic en el botón de cambio de tema.

🧠 Funcionalidades
changeTheme()
Emite el evento para alternar entre tema claro y oscuro.
El ícono se actualiza dinámicamente según el tema actual guardado en localStorage.

terminarSesion()
Emite el evento para que el componente padre se encargue de cerrar sesión (por ejemplo, limpiando localStorage y redirigiendo al login).

iconThemeName (getter)
Determina qué ícono se muestra en el botón de cambio de tema según el valor de localStorage.

---

## 🎨 Instrucciones de cambio de tema

El cambio de tema se realiza dinámicamente aplicando una clase al `<body>`:

### Clases utilizadas:
- `body.light` → Tema claro
- `body.dark` → Tema oscuro

### Variables CSS aplicadas:
- Inputs: `--input-bg`, `--input-border`, etc.
- Botones: `--btn-primary-bg`, `--btn-primary-hover-bg`, etc.

### ¿Cómo se cambia el tema?
1. Se incluye un botón en `NavbarComponent` que llama al `ThemeService`.
2. El `ThemeService` alterna las clases en `<body>` y guarda la preferencia en `localStorage`.
3. Para hacerlo funcionar en la pantalla, se debe clickear el boton que esta al superior derecho, de esta forma se alternar los temas claro y oscuro.

### Comentarios propios
1. Por motivos de tiempos, no pude realizar sobre el proyecto todas las optimizaciones que me hubiesen gustado, como un mayor uso de interfaces para aprovechar typeScript o 
haber adaptado mejor al cambio de tema a algunos componentes y graficos de primeNG (cosa que ya he hehco en otros proyectos mediante ::ng-deep y al tratarse que los graficos estan hehcos en canvas). Otra cosa que me genera sensación de disconformidad con la entrega es no haber podido complejizar mas la configurabilidad de los componentes chart, ya que en primeNG cada uno tiene una forma muy peculiar de configurarse.
2. Por temas de versiones y de soporte con las mismas, al correr el npm install arroja errores de vulnerabilidades, que en esta instancia de prueba no son criticas ni afectan al funcionamiento del frontend, pero que en caso de tratarse de un proyecto que puede llegar a entorno productivo es totalmente necesario corregir, con una mas profunda investigación de las versiones o, de ser necesario, nuevas dependencias.
3. Donde mas pude customizar el componente, fue en el componente de dynamic-table
4. Muchas gracias!
