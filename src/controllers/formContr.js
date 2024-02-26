const Form = require('../models/Form.js');

exports.cont = (request, response) => {
   response.render('contato');
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

