require("dotenv").config();
import express from "express";
import apiRoutes from "./routes/apiRoutes";

const app = express();
const port = process.env.PORT || 3000;

// Middleware
app.use(json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());


// Rutas
app.use("/api", apiRoutes);

// Iniciar servidor
app.listen(port, () => {
  console.log(`🚀 Servidor corriendo en http://localhost:${port}`);
});
