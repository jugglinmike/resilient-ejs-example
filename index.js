'use strict';

const express = require('express');
const app = express();

// Configure Express to use EJS as the template engine
app.set('view engine', 'ejs');

app.get('/', function(req, res) {
  res.render('index');
});

app.get('/contact', (req, res) => {
  res.render('contact');
});

app.listen(8123);
