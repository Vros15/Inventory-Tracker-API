//import express
const express = require("express");
const router = express.Router();

//import item controller
const {createItem,getAllItems,getItemById,updateItem} = require("../controllers/itemController");

/*
POST localhost:3000/api/v1/items
create new item
*/
router.post("/", createItem);

/*
GET localhost:3000/api/v1/items
get all items
*/
router.get("/", getAllItems);

/*
GET localhost:3000/api/v1/items/:id
get a single item by ID
*/
router.get("/:id", getItemById);

/*

PUT localhost:3000/api/v1/items/:id
update an item by ID

*/
router.put("/:id", updateItem);

//export the router
module.exports = router;