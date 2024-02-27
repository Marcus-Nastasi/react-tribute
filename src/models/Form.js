const mongoose = require('mongoose');

const FormSchema = new mongoose.Schema({ 
   name: String, 
   email: String, 
   foto: String,
   base64: String
});

const FormModel = mongoose.model('users', FormSchema);

class Form {
   constructor(body) {
      this.body = body;
   }

   send = async() => await FormModel.create(this.body);

   getUsers = async() => await FormModel.find();

   getSingleUser = async(id) => await FormModel.find({ _id: id });

   getImages = async(id) => {
      const user = await this.getSingleUser(id);

      const img = user.foto;

      // return img;
      return user;
   }

   delete = async(id) => await FormModel.findByIdAndDelete(id);
};

module.exports = Form;



