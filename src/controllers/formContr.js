const Form = require('../models/Form.js');

exports.cont = async (request, response) => {
   const FormContato = new Form(request.body);

   const data = await FormContato.getUsers();

   console.log(data);

   return response.render('contato');
};

exports.handlePost = async (request, response) => {
   const FormContato = new Form(request.body);

   try {
      await FormContato.send();
      return response.redirect('/');
   } catch (error) {
      console.log(error);
      return response.send('Erro');
   }
};

exports.users = async (req, res) => {
   const FormContato = new Form(req.body);

   try {
      const data = await FormContato.getUsers();
      return res.json(data); // Retorna os dados em JSON
   } catch (error) {
      console.log(error);
      return res.status(500).json({ error: 'Erro ao buscar os dados' });
   }
};

