// server.js
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const sql = require('mssql');
const config = require('./db');

const app = express();
const port = 5000;

app.use(cors());
app.use(bodyParser.json());

sql.connect(config, (err) => {
    if (err) {
        console.error('Database connection failed: ', err);
    } else {
        console.log('Connected to SQL Server');
    }
});

app.post('/login', async (req, res) => {
    const { account, password } = req.body;

    try {
        const request = new sql.Request();
        const result = await request
            .input('UserID', sql.VarChar, account)
            .input('Password', sql.VarChar, password)
            .query('SELECT * FROM tb_user WHERE User_ID = @UserID AND Password = @Password');

        if (result.recordset.length > 0) {
            res.json({ success: true, user: result.recordset[0] });
        } else {
            res.json({ success: false, message: 'Invalid credentials' });
        }
    } catch (err) {
        console.error('Login error: ', err);
        res.status(500).send('Server error');
    }
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
