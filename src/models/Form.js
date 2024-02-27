const mongoose = require('mongoose');

const FormSchema = new mongoose.Schema({ 
   title: String, 
   content: String, 
   base64: String
});

const FormModel = mongoose.model('publications', FormSchema);

class Form {
   constructor(body) {
      this.body = body;
   }

   send = async() => await FormModel.create(this.body);

   getPublis = async() => await FormModel.find();

   getSinglePubli = async(id) => await FormModel.find({ _id: id });

   edit = async(id) => await FormModel.findByIdAndUpdate(id, this.body, { new: true });

   delete = async(id) => await FormModel.findByIdAndDelete(id);
};

module.exports = Form;


