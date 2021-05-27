module.exports = app => {
    //CRIAÇÃO DA API PARA INSERÇÃO OU EDIÇÃO DE UMA CATEGORIA EM UM PRODUTO
    const Product = app.db.product_model.product_model

    const edit_category = async (req, res) => {
        try {
            const title = req.params.title
            const update_category = req.body.category
            const findTitle = await Product.findOneAndUpdate({ title: title }, { category: update_category })

            if (findTitle) {
                return res.status(200).send({ message: `Categoria do produto "${title}" foi editada com sucesso!`, data: { update_category }})
            }else{
                return res.status(400).send(`Título ${title} não existente!`)
            }
        } catch (error) {
            console.log(error)

            return res.status(500).send("Categoria não atualizada!")
        }
    }

    return { edit_category }
}