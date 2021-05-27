module.exports = app => {
    //CRIAÇÃO DA API DE REGISTRO DE PRODUTO
    const Product = app.db.product_model.product_model

    const register_product = async (req, res) => {
        try {
            const register = req.body
            const product = await Product.create(register)
    
            return res.status(201).send({ message: "Produto registrado com sucesso!", data: { product } })           
            
        } catch (error) {
            console.log(error)

            return res.status(500).send("Produto não registrado!")
        }
    }

    return { register_product }
}