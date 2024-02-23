const homeContr = require('../controllers/homeContr.js');
const express = require('express');
const routes = express.Router();

routes.get('/', homeContr.index);

routes.get('/contato', homeContr.cont);

module.exports = routes;


