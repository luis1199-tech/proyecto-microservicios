const express = require('express');
const { getConnection } = require('./database/db-connection-mongo');
const cors = require('cors');

const app = express();
const port = 4001;

app.use(cors());

getConnection();



// Parseo JSON
app.use(express.json());
//const { getConnection } = require('./db/db-connection-mongo');
app.use('/proyecto', require('./routes/proyecto'));

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
});