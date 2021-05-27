module.exports = app => {
    //CRIAÇÃO DA API QUE LISTA OS PRODUTOS PELO TÍTULO
    const Product = app.db.product_model.product_model

    const products_by_title = async (req, res) => {
        try {
            //NA CONSTANTE ABAIXO, UTILIZO O REGEX PARA ENCONTRAR QUALQUER TÍTULO SELECIONADO NO PARAMS E UTILIZO O 'OPTIONS' 'i' PARA RETORNAR O DADO INDEPENDENTE DE SER 
            //MAIÚSCULA OU MINÍSCULA
            const filter_by_title = await Product.find({ title: { $regex : req.params.title, '$options' : 'i' }  }, { _id: 0, __v: 0})

            return res.status(200).send({ message: `Produtos filtrados pelo título '${ req.params.title }' listados com sucesso!'`, data: { filter_by_title }})
        } catch (error) {
            console.log(error)
            
            return res.status(500).send("Produtos não listados!")
        }
    }

    return { products_by_title }
}