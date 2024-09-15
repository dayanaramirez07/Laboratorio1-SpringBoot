# Flight Search Application

## Descripción

Esta aplicación permite a los usuarios buscar vuelos disponibles dentro de un rango de fechas específico. Los usuarios pueden ingresar una fecha de inicio y una fecha final, y la aplicación mostrará una lista de vuelos disponibles con información detallada como origen, destino, fecha, cantidad de pasajeros, precio, aerolínea, y cantidad de asientos disponibles.

## Características

- Búsqueda de vuelos por origen, destino, y rango de fechas.
- Visualización de los detalles de cada vuelo (origen, destino, fechas, precio, aerolínea, cantidad de pasajeros y asientos disponibles).
- Filtros avanzados para búsqueda (origen, destino, fecha inicial, rango de fechas, cantidad de pasajeros).
- Mostrar más información sobre vuelos específicos seleccionados.
- Validación de fechas para asegurar que la fecha inicial no sea menor a la actual y la fecha final no sea menor a la inicial.

## Tecnologías

### Backend
- **Spring Boot:** Framework para desarrollar la API REST.
- **H2 Database:** Base de datos en memoria para la persistencia de datos de vuelos.
- **Maven:** Gestión de dependencias y construcción del proyecto.

### Frontend
- **Next.js:** Framework para la creación de la interfaz de usuario.
- **Axios:** Librería para realizar solicitudes HTTP al backend.
- **Tailwind CSS:** Utilizado para la estilización y diseño de la interfaz.

### Herramientas adicionales
- **Postman:** Herramienta para probar la API REST.
- **IntelliJ IDEA & Visual Studio Code:** IDEs utilizados para el desarrollo del backend y frontend respectivamente.

## Instalación

1. Clonar el repositorio:
   ```bash
   git clone https://github.com/tu-usuario/Laboratorio1-SpringBoot.git
2. Abrir la carpeta vueloudea-back en IntelliJ IDEA y ejecutar VueloudeaApplication.
3. Instalar las dependencias con el siguiente comando:
   ```bash
   npm install
4. Ejecutar el proyecto:
   ```bash
   yarn dev
   
## Ingreso de Datos de Prueba

Para poblar la base de datos H2 con datos de prueba:

1. Abre la consola H2 accediendo a [http://localhost:8080/h2-console](http://localhost:8080/h2-console) en tu navegador.
2. Inicia sesión con las siguientes credenciales:
   - **User Name**: sa
   - **Password**: password
3. Haz clic en "Connect" para acceder a la consola H2.
4. Ejecuta los scripts SQL para insertar datos de prueba. Aquí tienes un ejemplo básico para agregar un vuelo de prueba:
   ```sql
   INSERT INTO flight (origin, destination, date, seats_available, airline, price, adults, children)
   VALUES ('New York', 'London', '2024-10-01', 50, 'Delta', 500, 2, 0);

## Uso

1. Abrir la aplicación en el navegador (`http://localhost:3000`).
2. Ingresar los detalles de búsqueda (origen, destino, fechas, pasajeros) en el formulario.
3. Hacer clic en "Buscar" para obtener los vuelos disponibles.
4. Si hay resultados, aparecerán los detalles de los vuelos.
5. Para ver más información sobre un vuelo específico, hacer clic en "Ver más información".

## API Endpoints

El backend expone los siguientes endpoints:

- `GET (http://localhost:8080/api/flights/search?origin={origin}&destination={destination}&startDate={startDate}&endDate={endDate}&adults={adults}&children={children})`: Buscar vuelos disponibles según los parámetros ingresados, teniendo en cuenta que no son obligatorios y se pueden realizar diferentes búsquedas con ellos. Parámetros:
  - `origin`: El origen del vuelo.
  - `destination`: El destino del vuelo.
  - `startDate`: Fecha de inicio.
  - `endDate`: Fecha final.
  - `adults`: Cantidad de adultos.
  - `children`: Cantidad de niños.
