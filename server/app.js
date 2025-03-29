const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const homeRouter = require('./Routes/homeRoutes');
const path = require('path');
require('dotenv').config();

const PORT = process.env.PORT;

const app = express();

app.use(cors());
app.options('*', cors());
app.use(bodyParser.json());
app.use(homeRouter);

app.use(express.static(path.join(__dirname, '../client/dist/rickshaw-website')));

app.get('*', (req, res) => {
	res.sendFile(path.join(__dirname, '../client/dist/rickshaw-website/index.html'));
});

app.listen(PORT, () => {
	console.log('SERVER started on port', PORT);
});
