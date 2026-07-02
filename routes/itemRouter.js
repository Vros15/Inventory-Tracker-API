//import express
const express = require("express");
const router = express.Router();

//import item controller
const { createItem,getAllItems} = require("../controllers/itemController");

//create new item
router.post("/", createItem);

//get all items
router.get("/", getAllItems);


//export the router
module.exports = router;