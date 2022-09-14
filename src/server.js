const http = require('http');
const express = require('express');
require('dotenv').config();
const cors = require('cors');
const colors = require('colors');
const connectDb = require('./config/db');

const app = express();
const PORT = process.env.PORT || 5000;
const server = http.createServer(app);

app.use(express.json());
app.use(cors({ origin: ['http://localhost:5000'] }));

connectDb();
colors.enable();

app.get('/', (req, res) => {
    res.send({ message: "Please go to '/graphql'" });
});

server.listen(PORT, () => console.log(`Listening on PORT ${PORT}`));
