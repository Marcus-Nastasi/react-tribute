const mongoose = require('mongoose');

const FormSchema = new mongoose.Schema({
   name: String,
   email: String
});

const FormModel = mongoose.model('react-tribute-contato', FormSchema);

class Form {
   constructor(body) {
      this.body = body;
   }

   async send() {
      return await FormModel.create(this.body);
   }

   async getUsers() {
      return await FormModel.find();
   }
};

module.exports = Form;

