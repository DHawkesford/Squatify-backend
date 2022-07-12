import db from "../../connection.js";

async function dropTable() {
  const response = await db.query(
    `DROP TABLE IF EXISTS squat_log;`
  );
  
  console.log(response);
  
  db.end();
}

dropTable();