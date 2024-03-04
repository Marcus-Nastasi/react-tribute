const Form = require('../models/Form.js');

// Rendering
exports.createPg = async (req, res) => res.render('pages/create');

exports.publis = async (req, res) => res.render('pages/publi');

exports.edit = async (req, res) => {
   req.url = `${req.url}?id=${req.body._id}`;
   
   return res.render('pages/edit');
};

// Cruds
exports.create = async (req, res) => {
   try {
      const FormCreate = new Form(req.body);

      await FormCreate.send();
      
      return res.redirect('/publis');
   } catch(error) {
      console.log(error);
      return res.send('Erro');
   }
};

exports.getPublis = async (req, res) => {
   try {
      const Publis = new Form(req.body);

      const data = await Publis.getPublis();
      
      return res.json(data);
   } catch(error) {
      console.log(error);
      return res.status(500).json({ error: 'Erro ao buscar os dados' });
   }
};

exports.getOnePubli = async(req, res) => {
   try {
      const Publis = new Form(req.body);

      const singlePubli = await Publis.getSinglePubli(req.params.id);

      return res.send(singlePubli);
   } catch(error) {
      console.log('erro', error);
      return res.send(`Erro: ${error}`);
   }
};

exports.apiEdit = async(req, res) => {
   const FormEdit = new Form(req.body);

   await FormEdit.edit(req.params.id);
   
   return res.redirect('/publis');
};

exports.delete = async (req, res) => {
   try {
      const FormDel = new Form();

      await FormDel.delete(req.params.id);

      return res.redirect('/publis'); 
   } catch(error) {
      console.log(error);
      return res.redirect('/');
   }
};

