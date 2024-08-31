import mysql from 'mysql';

import dotenv from 'dotenv';

dotenv.config();

const dbcon = mysql.createPool({
    host: process.env.host,
    user: process.env.user,
    password: process.env.password,
    database: process.env.database,
    waitForConnections: true,
    connectionLimit: 10,
    maxIdle: 10,
    idleTimeout: 60000,
    queueLimit: 0
});

dbcon.query('CREATE TABLE IF NOT EXISTS Questions (question varchar(255), choices JSON, correct int);', (err) => {
    if (err) throw err
});

export default dbcon;