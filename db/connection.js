import pg from "pg";

const pool = new pg.Pool({
    // add URI and rejectUnauthorized
    connectionString: process.env.DATABASE_URL,
    ssl: {
        rejectUnauthorized: false
    }
});

export default pool;
