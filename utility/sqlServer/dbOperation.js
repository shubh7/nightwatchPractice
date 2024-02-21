const config = require("./dbConfig");
const sql = require("mssql");

async function runQuery(query) {
    try {
        const pool = await sql.connect(config);
        const result = await pool.request().query(query);
        console.log(result.recordset);
        return result.recordset;
    } catch (error) {
        console.log("THE ERROR IS: " + error);
    }
}
module.exports = {runQuery: runQuery};
