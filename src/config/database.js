import pg from "pg";
import dotenv from "dotenv";

dotenv.config();

const { Pool } = pg;

const pool = new Pool({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  password: process.env.DB_PASS,
  port: process.env.DB_PORT,
});

// Validar conexión
pool.connect()
  .then(() => console.log("✅ Conexión a PostgreSQL exitosa."))
  .catch((err) => console.error("❌ Error de conexión a PostgreSQL:", err));

export default pool;
