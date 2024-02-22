import mysql from 'mysql2';

const pool = mysql.createPool({
    host: '127.0.0.1',
    user: 'root',
    database: 'library_management',
    password: 'Madhan_1234',
    waitForConnections: true,
    connectionLimit: 10      
}).promise();

export default pool;