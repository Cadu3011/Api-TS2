import mysql from 'mysql2'

const query = mysql.createPool({
    host: 'localhost',      // Altere para o seu host MySQL
  user: 'root',           // Altere para o seu usuário MySQL
  password: 'cadu3011',          // Altere para a sua senha MySQL
  database: 'clientests'
})

export const db = query.promise();

