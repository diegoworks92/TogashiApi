// Importamos los módulos necesarios
const express = require("express");
const mysql = require("mysql");
const cors = require("cors");
require("dotenv").config();

// Creamos una nueva aplicación Express
const app = express();

// Usamos el middleware CORS para permitir solicitudes de origen cruzado
app.use(cors());

// Servimos archivos estáticos desde la carpeta 'public'
app.use(express.static("public"));

// Definimos el puerto en el que se ejecutará nuestro servidor
const port = process.env.PORT || 5000;

// Definimos una ruta de prueba para verificar que nuestro servidor está funcionando
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
});

// Creamos una conexión a nuestra base de datos MySQL
const connection = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
});

// Intentamos conectar a la base de datos
connection.connect((err) => {
  if (err) throw err;
  console.log("Connected to the database!");
});

// Definimos una ruta para obtener todos los platos de ramen
app.get("/ramen", (req, res) => {
  // Hacemos una consulta SQL para obtener todos los platos de ramen
  connection.query("SELECT * FROM ramen", (err, results) => {
    if (err) throw err;
    // Enviamos los resultados de la consulta como respuesta
    res.json(results);
  });
});

// Definimos una ruta para obtener todos los refrescos
app.get("/drinks", (req, res) => {
  // Hacemos una consulta SQL para obtener todos los refrescos
  connection.query("SELECT * FROM drinks", (err, results) => {
    if (err) throw err;
    // Enviamos los resultados de la consulta como respuesta
    res.json(results);
  });
});

// Iniciamos nuestro servidor en el puerto especificado
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
