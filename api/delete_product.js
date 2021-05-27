module.exports = app => {
    //CRIAÇÃO DA API DE EXCLUSÃO DE PRODUTO
    const Product = app.db.product_model.product_model

    const delete_product = async (req, res) => {
        try {
            const title = req.params.title
            const findTitle = await Product.findOneAndDelete({ title: title })

            if (findTitle) {
                return res.status(202).send({ message: "Produto excluído com sucesso!", data: { findTitle }})
            }else{
                return res.status(400).send(`O título "${title}" não existe!`)
            }
        } catch (error) {
            console.log(error)

            return res.status(500).send("Produto não foi excluído!")
        }
    }

    return { delete_product }
}