import transporter from "../src/config/mailer.js";

describe("Pruebas del servicio de correo", () => {
  it("Debe configurar el transporter de nodemailer correctamente", () => {
    expect(transporter).toBeDefined();
    expect(transporter.options).toHaveProperty("host");
    expect(transporter.options).toHaveProperty("port");
  });
});
