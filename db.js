const Pool = require("pg").Pool;
require('dotenv').config();

const {PASS} = process.env;

const pool = new Pool({
    user: "postgres",
    password: `${PASS}`,
    host: "localhost",
    port: 5432,
    database: "pes"
});

module.exports = pool;