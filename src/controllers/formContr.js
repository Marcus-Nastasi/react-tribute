const Form = require('../models/Form.js');

// Rendering
exports.cont = async (request, response) => response.render('pages/contato');

exports.users = async (req, res) => res.render('pages/users');

// Cruds
exports.handlePost = async (request, response) => {
   try {
      const FormContato = new Form(request.body);

      await FormContato.send();

      return response.redirect('/users');
   } catch(error) {
      console.log(error);
      return response.send('Erro');
   }
};

exports.getUsrs = async (req, res) => {
   try {
      const FormContato = new Form(req.body);

      const data = await FormContato.getUsers();

      return res.json(data);
   } catch(error) {
      console.log(error);
      return res.status(500).json({ error: 'Erro ao buscar os dados' });
   }
};

exports.delete = async (req, res) => {
   try {
      const FormContato = new Form();

      await FormContato.delete(req.params.id);

      return res.redirect('/users'); 
   } catch(error) {
      console.log(error);
      return res.redirect('/');
   }
};


// exports.getImages = async(req, res) => {
//    const FormToGetImg = new Form(req.body);

//    const user = await FormToGetImg.getImages(req.params.id);

//    const encoded = user[0].foto;

//    console.log(encoded);

//    return res.send(`
//       <img src="${encoded}">
//    `);
// };

