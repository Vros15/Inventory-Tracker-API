//import mongoose
const mongoose = require("mongoose");

//import item model
const Item = require("../models/itemsModel");

//import supplier model to reference in item model
const Suppliers = require("../models/suppliersModel");

//Create a new item in the inventory and associate it with a supplier.
const createItem = async (req, res) => {
    try{
        const newItem = await Item.create(req.body);
        res.status(201).json(newItem);

    }catch(error){
        res.status(500).json({message: error.message})
    }
};

//export the controller
module.exports = {
    createItem,

}