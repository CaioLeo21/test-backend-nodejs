const mongoose = require('mongoose')

mongoose.connect('mongoose://localhost/backendDB', { useNewUrlParser: true })
    .then(() => {
        console.log('backendDB conectado com sucesso!')
    })
    .catch((err) => {
        console.log(err)
    })

module.exports = mongoose
