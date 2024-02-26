const express = require('express');
const routes = express.Router();
const homeContr = require('../controllers/homeContr.js');
const formContr= require('../controllers/formContr.js');

// Home
routes.get('/', homeContr.index);

// Contato
routes.get('/contato', formContr.cont);
routes.post('/pst', formContr.handlePost);

// Users
routes.get('/users', formContr.users);
routes.get('/getUsr', formContr.getUsrs);
routes.get('/delete/:id', formContr.delete);

module.exports = routes;


