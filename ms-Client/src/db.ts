import { Pool } from "pg";

const connectionString = "COLOCAR CREDENCIAIS AQUI";
const db = new Pool({ connectionString });

export default db;
