import mysql from 'mysql2'
require('dotenv').config(); 
const query = mysql.createPool({
  host: `${process.env.HOST_BD}`,      
  user: `${process.env.USER_BD}`,         
  password: `${process.env.PASSWORD_BD}`,  
  database: `${process.env.DATABASE_BD}`
})

export const db = query.promise();

