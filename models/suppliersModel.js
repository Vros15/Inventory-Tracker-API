const mongoose = require('mongoose');

//create a schema for suppliers: Name : string required , unique, category: string , quanity: number default 0 , price: number, required , supplier: object id ref to suppliers, timestamp: date required
const supplierObject = mongoose.Schema.Types.ObjectId;



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