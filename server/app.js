const express= require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const dbConnection = require('./database/database');
const homeRouter = require('./Routes/homeRoutes');
const ProductsPictures = require('./database/models/productPics');
require('dotenv').config();

const PORT = process.env.PORT;

const app = express();



app.use(cors());
app.options('*', cors()); 
app.use(bodyParser.json());
app.use(homeRouter);

app.listen(PORT, ()=>{
    console.log('SERVER started on port',PORT);
})