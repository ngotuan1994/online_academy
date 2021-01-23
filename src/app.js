const express = require('express');
const app = express();
const morgan = require('morgan');
const exphbs = require('express-handlebars');
const path = require('path');
const multer = require('multer');
const upload = multer();
const route = require('./routes');
const mongoose = require('mongoose');
require('dotenv/config');
const db = require('./config/db');
db.connect();


app.use(express.json());
app.use(express.urlencoded( {extended: true}));
route(app);
app.engine('handlebars',exphbs());
app.set('view engine', 'handlebars');
app.set('views', path.join(__dirname,'views'));
app.use(morgan('combined'));
app.use(express.static(path.join(__dirname,'public')));


app.listen(3000,(req,res)=>{
    console.log(`Server is running in PORT 3000`);
});



