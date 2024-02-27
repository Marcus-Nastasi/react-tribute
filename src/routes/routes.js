const express = require('express');
const routes = express.Router();
const homeContr = require('../controllers/homeContr.js');
const publiContr = require('../controllers/publiContr.js');

// Home
routes.get('/', homeContr.index);

// Contato
routes.get('/create', publiContr.cont);
routes.post('/create/apis/pst', publiContr.create);

// Publis
routes.get('/publis', publiContr.publis);
routes.get('/publis/apis/publications', publiContr.getPublis);
routes.get('/publi/apis/delete/:id', publiContr.delete);
routes.get('/publi/apis/edit/', publiContr.edit);
routes.get('/publi/apis/search/:id', publiContr.getOnePubli);
routes.post('/publi/apis/edit/post/:id', publiContr.apiEdit);

module.exports = routes;

