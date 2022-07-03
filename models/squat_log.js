import db from "../db/connection.js";

export async function getSquatLog() {
  const result = await db.query(`SELECT * FROM squat_log;`);
  return result.rows;
}

export async function postSquatLog(squatNumber) {
  const result = await db.query(
    `INSERT INTO squat_log (no_squats) VALUES (${squatNumber}) RETURNING *`
  );
  return result.rows;
}
