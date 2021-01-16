const express = require('express');
const app = express();
const morgan = require('morgan');
const exphbs = require('express-handlebars');
const path = require('path');
app.engine('handlebars',exphbs());
app.set('view engine', 'handlebars');
app.set('views', path.join(__dirname,'views'));
app.use(morgan('combined'));
app.use(express.static(path.join(__dirname,'public')));
app.get('/',(req,res)=>{
    res.render('home');
});
app.get('/login', (req,res)=>{
    res.render('login');
});

app.listen(3000,(req,res)=>{
    console.log(`Server is running in PORT 3000`);
});

