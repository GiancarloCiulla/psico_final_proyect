const { Pool } = require('pg');
require('dotenv').config();

const pool = new Pool({
    user: process.env.DB_USER,
    host: process.env.DB_HOST,
    database: process.env.DB_DATABASE,
    password: process.env.DB_PASSWORD,
    port: process.env.DB_PORT,
    ssl: {
        require: true,               // Obliga el uso de SSL
        rejectUnauthorized: false    // Permite certificados autofirmados
    }
});

pool.on('connect', () => {
    console.log('Conexión exitosa con la base de datos.');
});

pool.on('error', (err) => {
    console.error('Error conectando a la base de datos:', err.message);
});

module.exports = pool;
