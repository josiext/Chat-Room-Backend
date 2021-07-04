import dotenv from "dotenv";

dotenv.config();

const { PORT = 3001, CORS } = process.env;

export const SYSTEM = {
  PORT: Number(PORT),
  CORS,
};
