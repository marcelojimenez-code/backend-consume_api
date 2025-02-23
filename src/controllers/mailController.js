import transporterOutlook from "../config/mailer.js";

export const sendMail = async (req, res) => {
  try {
    const emailDate = new Date().toLocaleDateString();

    let result = await transporterOutlook.sendMail({
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_TO_CONFIRM,
      cc: process.env.EMAIL_TO_ALERT,
      subject: "Test de funcionamiento de nodemailer con Exchange",
      text: "Prueba de correo con nodemailer usando Exchange",
      html: `
      <!DOCTYPE html>
      <html lang="es">
      <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>ACTUALIZACION DE BITACORAWEB</title>
      </head>
      <body>
          <h2>ACTUALIZACION DE BITACORAWEB fecha: ${emailDate}</h2>
          <p>Se ejecuta manual</p>
      </body>
      </html>
      `,
    });

    res.status(200).json({
      success: true,
      message: "📧 Correo enviado correctamente",
      response: result,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "❌ Error al enviar el correo",
      error: error.message,
    });
  }
};
