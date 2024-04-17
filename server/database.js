import { Pool } from 'pg';
import dotenv from 'dotenv';
dotenv.config();

//Pool para base de datos
const pool = new Pool({
    user: process.env.DATABASE_USERNAME,
    host: process.env.DATABASE_HOST,
    database: process.env.DATABASE_NAME,
    password: process.env.DATABASE_PASSWORD,
    port: process.env.DATABASE_PORT,
    ssl: true
    // ssl: {
    //     rejectUnauthorized: false // Opciones adicionales para configurar SSL, según sea necesario
    // }
});

module.exports = { pool }