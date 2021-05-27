module.exports = app => {
    //CRIAÇÃO DE API PARA ATUALIZAÇÃO DOS DADOS DO PRODUTOS
    const Product = app.db.product_model.product_model

    const update_product = async (req, res) => {
        try {
            const update = req.body
            const title = req.params.title

            if (await Product.findOne({ title: title })) {
                await Product.update(update)

                return res.status(200).send({ message: "Produto atualizado com sucesso!", data: { update }})
            }else{
                return res.status(400).send(`Título ${title} não existente!`)
            }
            
        } catch (error) {
            console.log(error)

            return res.status(500).send("Produto não atualizado!")
        }
    }

    return { update_product }
}