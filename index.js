const express = require('express');
const app = express();
const playersRoute = require('./routes/players');
require('dotenv').config();

const PORT = process.env.PORT || 3000;

app.use(express.json());

app.use('/players', playersRoute);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
