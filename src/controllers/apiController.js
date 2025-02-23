import { fetchAndStoreData } from "../services/apiService.js";

export const handleFetchData = async (req, res) => {
  await fetchAndStoreData();
  res.send("✅ Datos obtenidos e insertados en la base de datos.");
};
