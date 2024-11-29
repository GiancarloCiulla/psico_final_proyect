// Importar paquetes necesarios
const express = require("express");
const cookieParser = require("cookie-parser");
const dotenv = require("dotenv");
const cors = require("cors"); // Importa el middleware de CORS

// Inicializar el servidor
const app = express();
const port = process.env.PORT || 3000;


// Configura CORS
app.use(cors()); 



// Configuración de entorno
dotenv.config();


// -------------------------------------------------------------------------
// Middlewares 
app.use(express.urlencoded({ extended: true })); 
app.use(express.json()); 
app.use(cookieParser()); 
app.use(express.static("public")); 

// -------------------------------------------------------------------------
// Importar rutas
const userRoutes = require("./routes/usersRoutes");
const blogsRoutes = require("./routes/blogsRoutes");
const citasRoutes = require("./routes/citasRoutes");
const adminRoutes = require("./routes/adminRoutes");

// Habilitar rutas con prefijos específicos
app.use("/user", userRoutes); 
app.use("/blog", blogsRoutes); 
app.use("/citas", citasRoutes); 
app.use("/admin", adminRoutes);



app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});










