import pool from "../src/config/database.js";

describe("Pruebas de la conexión a PostgreSQL", () => {
  it("Debe conectarse correctamente a la base de datos", async () => {
    const client = await pool.connect();
    expect(client).toBeDefined();
    client.release();
  });
});
