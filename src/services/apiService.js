import axios from "axios";
import dotenv from "dotenv";
import { truncateUsers, insertUser } from "../models/userModel.js";
import transporter from "../config/mailer.js";

dotenv.config();

const sendAlertEmail = async (errorMessage) => {
  const mailOptions = {
    from: `"API Monitor" <${process.env.EMAIL_USER}>`,
    to: process.env.EMAIL_TO_ALERT,
    subject: "⚠️ Alerta: La API ha fallado",
    text: `Se detectó un problema al consumir la API.\n\nError: ${errorMessage}\n\nFecha: ${new Date().toISOString()}`,
  };
  try {
    await transporter.sendMail(mailOptions);
    console.log("📧 Alerta enviada por correo.");
  } catch (error) {
    console.error("❌ Error al enviar alerta:", error);
  }
};

const sendSuccessEmail = async (processedCount) => {
  const mailOptions = {
    from: `"API Monitor" <${process.env.EMAIL_USER}>`,
    to: process.env.EMAIL_TO_CONFIRM,
    subject: "✅ API Ejecutada Correctamente",
    text: `La API se ejecutó con éxito y procesó ${processedCount} registros.\n\nFecha: ${new Date().toISOString()}`,
  };
  try {
    await transporter.sendMail(mailOptions);
    console.log("📧 Correo de confirmación enviado.");
  } catch (error) {
    console.error("❌ Error al enviar confirmación:", error);
  }
};

export const fetchAndStoreData = async () => {
  console.log("🚀 Ejecutando consumo de API...");
  try {
    const response = await axios.get(process.env.API_URL, {
      headers: { Authorization: `Bearer ${process.env.API_KEY}` },
    });

    const users = response.data;

    await truncateUsers();
    console.log("🗑️  Tabla truncada.");

    let processedCount = 0;
    for (const user of users) {
      await insertUser(user.name, user.email, user.phone);
      console.log(`✔ Usuario ${user.name} insertado.`);
      processedCount++;
    }

    console.log("✅ Proceso completado.");
    await sendSuccessEmail(processedCount);
  } catch (error) {
    console.error("❌ Error al consumir la API:", error);
    await sendAlertEmail(error.message);
  }
};
