import mysql from "mysql";
import dotenv from "dotenv";

dotenv.config();

/**
 * Connection to a MySQL database.
 * @module dbcon
 */
const dbcon = mysql.createPool({
    host: process.env.host,
    user: process.env.user,
    password: process.env.password,
    database: process.env.database,
    waitForConnections: true,
    connectionLimit: 10,
    maxIdle: 10,
    idleTimeout: 60000,
    queueLimit: 0,
});

// Create a questions table in the database if it does not yet exist
dbcon.query(
    "CREATE TABLE IF NOT EXISTS Questions (question varchar(255), choices JSON, correct int);",
    (err) => {
        if (err) throw err;
    }
);

export default dbcon;
