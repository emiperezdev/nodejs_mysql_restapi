import { createPool } from "mysql2/promise";

const pool = createPool({
  host: "localhost",
  user: 'root',
  password: 'Soyunhit1!',
  port: 3306,
  database: 'companydb'
});

export default pool;