//import express
const express = require("express");
const router = express.Router();

//import supplier controller
const { createSupplier,getAllSuppliers } = require("../controllers/supplierController");

//create new supplier
router.post("/", createSupplier);

//get all suppliers
router.get("/", getAllSuppliers);

//export the router
module.exports = router;