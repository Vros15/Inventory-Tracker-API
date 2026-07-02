//import express
const express = require("express");
const router = express.Router();

//import item controller
const { createItem,getAllItems,getItemById} = require("../controllers/itemController");

//create new item
router.post("/", createItem);

//get all items
router.get("/", getAllItems);

//get a single item by ID
router.get("/:id", getItemById);

//export the router
module.exports = router;