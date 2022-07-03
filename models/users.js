import db from "../db/connection.js";

export async function getSquatLog() {
  const result = await db.query(`SELECT * FROM squat_log;`);
  return result.rows;
}
