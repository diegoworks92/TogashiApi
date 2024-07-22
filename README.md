# Proyecto de API de Node.js para https://restaurant.diegoworks.com/

## Descripción

Este proyecto es una API construida con Node.js, Express.js y MySQL. Proporciona endpoints para acceder a los datos de los platos de ramen y las bebidas ofrecidas por el restaurante Togashi.

## ¿Para qué sirve?

Esta API se utiliza para alimentar la aplicación web de React del restaurante Togashi Sapporo Ramen. La aplicación web llama a esta API para obtener los datos que necesita para mostrar a los usuarios los platos de ramen y las bebidas disponibles.

## ¿Quién lo usará?

Esta API será utilizada principalmente por los visitantes de la aplicación web del restaurante Togashi Sapporo Ramen. Los visitantes podrán ver los diferentes platos de ramen y bebidas disponibles en el menú del restaurante.

## ¿Desde dónde se puede acceder?

Esta API está alojada en Vercel y se puede acceder desde cualquier lugar con una conexión a Internet. La dirección de la API es https://togashi-api.vercel.app/.

## Tecnologías y frameworks utilizados

- **HTML**: Lenguaje de marcado utilizado para la estructura y el contenido de la página web.
- **CSS**: Lenguaje de hojas de estilo utilizado para describir la presentación de la página web.
- **JavaScript**: Lenguaje de programación utilizado para la interactividad de la página web.
- **Node.js**: Un entorno de ejecución de JavaScript en el servidor. Se utiliza para crear el servidor de la API.
- **Express.js**: Un marco de aplicación web para Node.js. Se utiliza para manejar las solicitudes HTTP a la API.
- **MySQL**: Un sistema de gestión de bases de datos relacional. Se utiliza para almacenar los datos de los platos de ramen y las bebidas.
- **dotenv**: Un módulo de Node.js que permite cargar variables de entorno desde un archivo `.env`. Se utiliza para manejar las credenciales de la base de datos de forma segura.
- **cors**: Un paquete de Node.js para proporcionar un middleware de CORS. Se utiliza para permitir solicitudes de origen cruzado a la API.

## Cómo utilizar

Para utilizar esta API, puedes hacer solicitudes HTTP a los siguientes endpoints:

- `/ramen`: Devuelve una lista de todos los platos de ramen disponibles.
- `/drinks`: Devuelve una lista de todas las bebidas disponibles.

Cada endpoint devuelve un array de objetos, donde cada objeto representa un plato de ramen o una bebida y contiene los siguientes campos: `id`, `type`, `img`, `name`, `description`, `price`, `spicy`, `vegetarian`, `vegan`, `quantity`.
