import { fetchAndStoreData } from "../services/apiService.js";

export const handleFetchData = async (req, res) => {
  //await fetchAndStoreData();
  //res.send("✅ Datos obtenidos e insertados en la base de datos.");
  try {
    await fetchAndStoreData();
    res.status(200).json({
      success: true,
      message: "✅ Datos obtenidos e insertados en la base de datos."
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "❌ Error al procesar la solicitud.",
      error: error.message
    });
  }
};
