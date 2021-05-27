module.exports = app => {
    //CRIAÇÃO DA API DE REGISTRO DE PRODUTO
    const Product = app.db.product_model.product_model

    const register_product = async (req, res) => {
        try {
            const product = await Product.create(req.body)
    
            return res.status(201).send({ message: "Produto registrado com sucesso!", data: { product } })
        } catch (error) {
            console.log(error)

            return res.status(500).send("Produto não registrado!")
        }
    }

    return { register_product }
}