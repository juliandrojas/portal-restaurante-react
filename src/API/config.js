import { config } from 'dotenv';
config();

// Usamos las variables de entorno
export const PORT = process.env.PORT || 3000;
export const DB_URI = process.env.DB_URI || 'your_mongodb_uri';
export const DB_NAME = process.env.DB_NAME || 'appmercado';
