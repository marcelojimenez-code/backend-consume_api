import request from "supertest";
import app from "../src/server.js";

describe("API Fetch Route", () => {
  it("Debe responder con un código 200 y un mensaje de éxito", async () => {
    const response = await request(app).get("/api/fetch");
    expect(response.statusCode).toBe(200);
    expect(response.text).toBe("✅ Datos obtenidos e insertados en la base de datos.");
  });
});
