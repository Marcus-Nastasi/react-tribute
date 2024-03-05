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
      return res.status(500).json({ erro: error });
   }
};

exports.getPublis = async (req, res) => {
   try {
      const Publis = new Form(req.body);

      const data = await Publis.getPublis();
      
      return res.json(data);
   } catch(error) {
      return res.status(500).json({ erro: error });
   }
};

exports.getOnePubli = async(req, res) => {
   try {
      const Publis = new Form(req.body);

      const singlePubli = await Publis.getSinglePubli(req.params.id);

      return res.json(singlePubli);
   } catch(error) {
      return res.status(500).json({ erro: error });
   }
};

exports.apiEdit = async(req, res) => {
   try {
      const FormEdit = new Form(req.body);

      await FormEdit.edit(req.params.id);
      
      return res.redirect('/publis');
   } catch (error) {
      return res.status(500).json({ erro: error });
   }
};

exports.delete = async (req, res) => {
   try {
      const FormDel = new Form();

      await FormDel.delete(req.params.id);

      return res.redirect('/publis'); 
   } catch(error) {
      return res.status(500).json({ erro: error });
   }
};

