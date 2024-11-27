// Importar las dependencias necesarias
import express from "express";
import cors from "cors";

// Crear una instancia de Express
const app = express();

// Configurar middlewares
app.use(cors()); // Habilitar CORS
app.use(express.json()); // Middleware para parsear JSON

// Definir una ruta básica
app.get("/", (req, res) => {
  res.send("HANS Y SERGIO TE ACOMPAÑAN Y TODO SALDRA BIEN.");
});

// Configurar el puerto (puedes cambiar a otro puerto si hay conflictos)
const PORT = process.env.PORT || 3001;

// Iniciar el servidor
app.listen(PORT, () => {
  console.log(`Servidor escuchando en http://localhost:${PORT}`);
});
