// Importar paquetes necesarios
const express = require("express");
const cookieParser = require("cookie-parser");
const dotenv = require("dotenv");

// Configuración de entorno
dotenv.config();

// Inicializar el servidor
const app = express();
const port = process.env.PORT || 3000;

// -------------------------------------------------------------------------
// Middlewares 
app.use(express.urlencoded({ extended: true })); // Parsear datos de formularios (x-www-form-urlencoded)
app.use(express.json()); // Parsear datos en formato JSON
app.use(cookieParser()); // Parsear cookies
app.use(express.static("public")); // Servir archivos estáticos (CSS, JS, imágenes, etc.)

// -------------------------------------------------------------------------
// Importar rutas
const userRoutes = require("./routes/usersRoutes");
const blogsRoutes = require("./routes/blogsRoutes");
const citasRoutes = require("./routes/citasRoutes");

// Habilitar rutas con prefijos específicos
app.use("/user", userRoutes); 
app.use("/blogs", blogsRoutes); 
app.use("/citas", citasRoutes); 


app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});










