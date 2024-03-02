require('dotenv').config();
const express = require('express');
const app = express();
const path = require('path');
const routes = require('./src/routes/routes');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

mongoose.connect(process.env.CONNECTIONSTR).then(() => app.emit('ok')).catch(e => console.log(e));

app.use(bodyParser.json({ limit: '40mb' }));
app.use(bodyParser.urlencoded({ extended: true, limit: '40mb' }));
app.use(express.json());

app.set('views', path.join(__dirname, 'dist'));
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');

app.use(express.static(path.join(__dirname, 'dist')));

app.use(routes);

app.on('ok', () => app.listen(process.env.PORT, () => console.log('http://localhost:3003/')));


