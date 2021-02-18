const path =require('path')
const express = require('express');
const morgan=require('morgan');
const handlebars=require('express-handlebars');
const app = express();
const port = 3000;

//HTTP logger
app.use(morgan('combined'));

//Template engine
app.engine('html',handlebars({
  extname:'.html'
}));
app.set('view engine','html');
app.set('views', path.join(__dirname, 'resources/views'));

app.get('/trang-chu', (req, res) => {    
  res.render('home')
})
app.get('/tin-tuc', (req, res) => {    
  res.render('news')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})