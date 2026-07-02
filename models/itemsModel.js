//import mongoose
const mongoose = require("mongoose");

//create a schema for items
const itemsSchema = new mongoose.Schema({

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
    timestamp: {
    required: true,
  }
});

//create a model for items
const Items = mongoose.model("Items", itemsSchema);

//export the model
module.exports = Items;