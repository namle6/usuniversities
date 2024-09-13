const Pool = require("pg").Pool


const pool = new Pool({
    user: "postgres",
    password: "NamLe6",
    host: "localhost", 
    port: 5432,
    database: "usuniversities"

});

module.exports = pool;