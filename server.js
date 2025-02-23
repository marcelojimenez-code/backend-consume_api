require("dotenv").config();
import express, { json } from "express";
import apiRoutes from "./src/routes/apiRoutes";

const app = express();
const port = process.env.PORT || 3000;

// Middleware
app.use(json());

// Rutas
app.use("/api", apiRoutes);

// Iniciar servidor
app.listen(port, () => {
  console.log(`🚀 Servidor corriendo en http://localhost:${port}`);
});
