const express = require('express');
const app = express();
const morgan = require('morgan');
const methodOverride = require('method-override');
const exphbs = require('express-handlebars');
const path = require('path');
const multer = require('multer');
const upload = multer();
const route = require('./routes');
const mongoose = require('mongoose');
require('dotenv/config');
const db = require('./config/db');
db.connect();
const {auth} = require('express-openid-connect');
app.use(express.static(path.join(__dirname,'public')));
app.use(express.json());
app.use(express.urlencoded( {extended: true}));
app.use(methodOverride('_method'));
const config = {
    authRequired: false,
    auth0Logout: true,
    baseURL: process.env.baseURL,
    clientID: process.env.clientID,
    issuerBaseURL: process.env.issuerBaseURL,
    secret: process.env.secret,
  };


app.use(auth(config));
route(app);
app.engine('handlebars',exphbs({
  helpers: {
    get: (obj,prop) => obj[prop]
  }
}));
app.set('view engine', 'handlebars');
app.set('views', path.join(__dirname,'views'));
app.use(morgan('combined'));


app.listen(3000,(req,res)=>{
    console.log(`Server is running in PORT 3000`);
});




