const mongoose = require('mongoose');

//create a schema for suppliers: Name : string required , unique, category: string , quanity: number default 0 , price: number, required , supplier: object id ref to suppliers, timestamp: date required
const supplierObject = mongoose.Schema.Types.ObjectId;

const suppliersSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true
  },
  category: {
    type: String
  },
  quantity: {
    type: Number,
    default: 0
  },
  price: {
    type: Number,
    required: true
  },
  supplier: {
    type: supplierObject,
    ref: 'Suppliers'
  },
  timestamp: {
    type: Date,
    required: true
  }
});

//create model for suppliers
const Suppliers = mongoose.model('Suppliers', suppliersSchema);

//export the model
module.exports = Suppliers;