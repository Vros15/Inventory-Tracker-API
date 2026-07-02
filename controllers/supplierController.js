//import mongoose
const mongoose = require("mongoose");

const Suppliers = require("../models/suppliersModel");

//create new supplier

const createSupplier = async (req, res) => {
    try{
        const newSupplier = await Suppliers.create(req.body);
        res.status(201).json(newSupplier);
    }
    catch(error){
        res.status(500).json({message: error.message})
    };

};

//export the controller
module.exports = {
    createSupplier
}