const sql = require('mssql');

const config = {
    user: 'ADMM',
    password: 'python3.048',
    server: 'DNI.SFIS_DET3',
    database: 'THBPO3NBH007903\\SQLEXPRESS', // Use double backslashes for the instance name
    options: {
        encrypt: true, // Use this if you're on Windows Azure
        enableArithAbort: true
    }
};

module.exports = config;
