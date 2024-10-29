const express = require('express');
const router = express.Router();
const pool = require('../db/db');

router.get('/', async (req, res) => {
    try {
        const result = await pool.query('SELECT * FROM football');
        console.log('Postgresql Datbase Connected Successfully...');
        res.json(result.rows);
        console.log('Retrieved footballers data');
    } catch (err) {
        console.error(err.stack);
        res.status(500).send('Server Error');
    }
});

module.exports = router;
