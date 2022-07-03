import db from "../../connection.js";

async function populateTable() {
  const response = await db.query(
    `INSERT INTO squat_log  `
  );
  
  console.log(response);
  
  db.end();
}

populateTable();