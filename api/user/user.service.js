const config = require('../../dbconfig');
const sql = require('mssql');
const tableName = 'Users';

const login = async (credentials) => {
    try {
        config.user = credentials.name;
        config.password = credentials.password;
        var pool = await sql.connect(config);
        let user = await pool.request().input('input1_parameter', sql.NVarChar, credentials.name).input('input2_parameter', sql.NVarChar, credentials.password)
            .query(`select * from ${tableName} where UserName=@input1_parameter AND Password=@input2_parameter`)
        return user.recordsets;
    } catch (error) {
        console.log(error)
    }
}

module.exports = {
    login
}