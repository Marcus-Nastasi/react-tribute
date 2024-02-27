require('dotenv').config();
const express = require('express');
const app = express();
const path = require('path');
const routes = require('./src/routes/routes');
const port = 3003;
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

mongoose.connect(process.env.CONNECTIONSTR).then(() => app.emit('ok')).catch(e => console.log(e));

// app.use(express.urlencoded({ extended: true }));

app.use(bodyParser.json({ limit: '200mb' }));
app.use(bodyParser.urlencoded({ extended: true, limit: '200mb' }));

app.set('views', path.join(__dirname, 'dist'));
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');

app.use(express.static(path.join(__dirname, 'dist')));

app.use(routes);

app.on('ok', () => app.listen(port, () => console.log('http://localhost:3003/')));


