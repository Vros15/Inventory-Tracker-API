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

//read all items in the inventory and populate the supplier information for each item.
const getAllItems = async (req, res) => {
    try{
        const items = await Item.find().populate('supplier');
        res.status(200).json(items);
    }catch(error){
        res.status(500).json({message: error.message})
    };
};


//read a single item by its ID and populate the supplier information.
const getItemById = async (req, res) => {
    try{
        const item = await Item.findById(req.params.id).populate('supplier');
        if(!item){
            return res.status(404).json({message: "Item not found"});
        }
        res.status(200).json(item);
    }catch(error){
        res.status(500).json({message: error.message})
    };
}

//Update an item given its ID
const updateItem = async (req, res) => {
    try{
        //find the item by ID and update it with the new data from the request body, returning the updated item.
        const updatedItem = await Item.findByIdAndUpdate(req.params.id, req.body, {new: true});
        if(!updatedItem){
            return res.status(404).json({message: "Item not found"});
        }
        res.status(200).json(updatedItem);
    }catch(error){
        res.status(500).json({message: error.message})
    };
}

//Delete an item given its ID.
const deleteItem = async (req, res) => {
    try{
        //find the item by ID and delete it from database, returning the deleted item.
        const deletedItem = await Item.findByIdAndDelete(req.params.id);
        if(!deletedItem){
            return res.status(404).json({message: "Item not found"});
        }
        //return a success message with the name of the deleted item
        res.status(200).json({message: `Item ${deletedItem.name} has been deleted successfully`});
    }catch(error){
        res.status(500).json({message: error.message})
    };
}

//export the controller
module.exports = {
    createItem,
    getAllItems,
    getItemById,
    updateItem,
    deleteItem
}