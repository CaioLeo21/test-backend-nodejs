const express = require('express')
const app = express()
const consign = require('consign')
const mongoose = require('./db/config')
const port = 3000

app.use(express.json())
app.mongoose = mongoose

consign()
    .then('./db/product_model.js') 
    .then('./api')
    .then('./routes.js')
    .into(app)

app.listen(port, () => {
    console.log(`Tudo certo na porta ${port}`)
})