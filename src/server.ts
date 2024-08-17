import { app } from "./app";
import cors  from 'cors'
require('dotenv').config();
const PORT = process.env.PORT 
  app.use(cors());
app.listen(PORT,()=>{
    console.log(`rodando na porta ${PORT} `)
})