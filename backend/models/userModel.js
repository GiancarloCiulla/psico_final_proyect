const queries = require('../queries/user.queries') // Queries SQL
const pool = require('../config/db_pgsql')

const getAllUsers = async () => {
    let client, result;
    try {
        client = await pool.connect();
        const data = await client.query(queries.getAllUsers)
        result = data.rows
    } catch (err) {
        console.log(err);
        throw err;
    } finally {
        client.release();
    }
    return result
}

const users = {
    getAllUsers
}

module.exports = users;