const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const dbConnection = require('./database/database');
const homeRouter = require('./Routes/homeRoutes');
const path = require('path');
const ProductsPictures = require('./database/models/productPics');
require('dotenv').config();

const PORT = process.env.PORT;
const CLIENTPORT = process.env.CLIENTPORT;

const app = express();

app.use(cors());
app.options('*', cors());
app.use(bodyParser.json());
app.use(homeRouter);

app.listen(PORT, () => {
	console.log('SERVER started on port', PORT);
});

// const clientApp = express();
// clientApp.use(express.static(path.join(__dirname, '../client/dist/rickshaw-website')));

// clientApp.get('/*', (req, res) => {
// 	res.sendFile(path.join(__dirname, '../client/dist/rickshaw-website/index.html'));
// });

// clientApp.listen(CLIENTPORT, () => {
// 	console.log('CLIENT started on port', CLIENTPORT);
// });
