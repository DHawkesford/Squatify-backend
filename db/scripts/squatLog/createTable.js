import db from "../../connection.js";

async function createTable() {
  const response = await db.query(
    `CREATE TABLE IF NOT EXISTS squat_log (id SERIAL PRIMARY KEY, no_squats INT);`
  );
  
  console.log(response);
  
  db.end();
}

createTable();