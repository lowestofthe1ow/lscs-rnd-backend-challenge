import mysql from 'mysql';

const dbcon = mysql.createPool({
    host: "localhost",
    user: "root",
    password: "tobisawamisaki",
    database: "LSCSChallenge",
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