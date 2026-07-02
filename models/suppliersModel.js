const mongoose = require('mongoose');


const suppliersSchema = new mongoose.Schema({

  name: {
    type: String,
    required: true,
    unique: true
  },
  email: {
    type: String,
  },
    phone: {
    type: String,
    },
  },
  {timestamps: true}
);

//create model for suppliers
const Suppliers = mongoose.model('Suppliers', suppliersSchema);

//export the model
module.exports = Suppliers;