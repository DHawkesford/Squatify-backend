import db from "../../connection.js";

//The populate script is for dev purposes only- production version will arive with an empthy table for the user to
//populate themselves.
let sqlString = `INSERT INTO squat_log (no_squats) VALUES (15), (18), (22) RETURNING *;`;
async function populateTable() {
  const response = await db.query(sqlString);

  console.log(response);

  db.end();
}

populateTable();
