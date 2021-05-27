const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost/backendDB', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log('backendDB conectado com sucesso!')
    })
    .catch((err) => {
        console.log(err)
    })

module.exports = mongoose
