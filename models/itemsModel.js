//import mongoose
const mongoose = require("mongoose");

//create a schema for items
const itemsSchema = new mongoose.Schema({
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
  }

}, {timestamps: true});


//create a model for items
const Items = mongoose.model("Items", itemsSchema);

//export the model
module.exports = Items;