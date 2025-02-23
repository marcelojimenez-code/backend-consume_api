import pool from "../config/database.js";

export const truncateUsers = async () => {
  await pool.query("TRUNCATE TABLE users RESTART IDENTITY;");
};

export const insertUser = async (name, email, phone) => {
  await pool.query("INSERT INTO users (name, email, phone) VALUES ($1, $2, $3)", [name, email, phone]);
};
