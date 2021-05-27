module.exports = app => {
    //CRIAÇÃO DA API QUE LISTA OS PRODUTOS PELA CATEGORIA
    const Product = app.db.product_model.product_model

    const products_by_category = async (req, res) => {
        try {
            //NA CONSTANTE ABAIXO, UTILIZO O REGEX PARA ENCONTRAR QUALQUER CATEGORIA SELECIONADA NO PARAMS E UTILIZO O 'OPTIONS' 'i' PARA RETORNAR O DADO INDEPENDENTE DE SER 
            //MAIÚSCULA OU MINÍSCULA
            const filter_by_category = await Product.find({ category: { $regex: req.params.category, $options: 'i' }}, { _id: 0, __v: 0 })

            return res.status(200).send({ message: `Produtos filtrados pela categoria '${ req.params.category }' listados com sucesso!`, data: { filter_by_category }})
        } catch (error) {
            console.log(error)

            return res.status(500).send("Produtos não listados!")
        }
    }

    return { products_by_category }
}