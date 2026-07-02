//import express
const express = require("express");
const router = express.Router();

//import item controller
const { createItem} = require("../controllers/itemController");

//create new item
router.post("/", createItem);



//export the router
module.exports = router;