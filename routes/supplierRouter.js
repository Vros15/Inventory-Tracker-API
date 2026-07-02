//import express
const express = require("express");
const router = express.Router();

//import supplier controller
const { createSupplier } = require("../controllers/supplierController");

//create new supplier
router.post("/", createSupplier);


//export the router
module.exports = router;