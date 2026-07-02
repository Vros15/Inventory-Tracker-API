//import express
const express = require("express");
const router = express.Router();

//import item controller
const {createItem,getAllItems,getItemById,updateItem,deleteItem,getItemsBySupplierId} = require("../controllers/itemController");

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
GET localhost:3000/api/v1/items/supplier/:supplierId
Get all items supplied by a specific supplier.
*/
router.get("/supplier/:supplierId", getItemsBySupplierId);

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

/*
DELETE localhost:3000/api/v1/items/:id
delete an item by ID
*/
router.delete("/:id", deleteItem);


//export the router
module.exports = router;