import pg from "pg";

const pool = new pg.Pool({
    // add URI and rejectUnauthorized
});

export default pool;
