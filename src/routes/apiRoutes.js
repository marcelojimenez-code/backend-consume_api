import express from "express";
import { handleFetchData } from "../controllers/apiController.js";

const router = express.Router();

router.get("/fetch", handleFetchData);

export default router;
