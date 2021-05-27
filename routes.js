module.exports = app => {
    app.route('/v1/products')
        .post(app.api.register_product.register_product)
        .get(app.api.list_products.list_products)

    app.route('/v1/product/:title')
        .put(app.api.update_product.update_product)
        .delete(app.api.delete_product.delete_product)        

    app.route('/v1/products/category/:category')
        .get(app.api.products_by_category.products_by_category)

    app.route('/v1/products/title/:title')
        .get(app.api.products_by_title.products_by_title)

    app.route('/v1/category/:title')
        .put(app.api.edit_category.edit_category)
}