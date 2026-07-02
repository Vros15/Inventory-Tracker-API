const express = require('express')
const app = express()
const logger = require('morgan')

const connectToMongoDB = require('./database/connectToMongoDB')

app.use(express.json())
app.use(logger('dev'))

//import routes
const supplierRouter = require("./routes/supplierRouter");
const itemRouter = require("./routes/itemRouter");



//register API routes
app.use("/api/v1/suppliers", supplierRouter);
app.use("/api/v1/items", itemRouter);


const PORT = 3000

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`)
  connectToMongoDB()
})