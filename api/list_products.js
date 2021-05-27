module.exports = app => {
    //CRIAÇÃO DA API DE LISTAGEM DE TODOS PRODUTOS CADASTRADOS
    const Product = app.db.product_model.product_model

    const list_products = async (req, res) => {
        try {
            const products = await Product.find({}, { _id: 0, __v: 0 })

            return res.status(200).send({ message: "Produtos listados com sucesso!", data: { products }})
        } catch (error) {
            console.log(error)

            return res.status(500).send("Produtos não listados!")
        }
    }

    return { list_products }
}