const mongoose = require('mongoose');

const FormSchema = new mongoose.Schema({ name: String, email: String });

const FormModel = mongoose.model('users', FormSchema);

class Form {
   constructor(body) {
      this.body = body;
   }

   send = async() => await FormModel.create(this.body);

   getUsers = async() => await FormModel.find();

   delete = async(id) => await FormModel.findByIdAndDelete(id);
};

module.exports = Form;

