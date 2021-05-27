module.exports = app => {
    app.route('/v1/register')
        .post(app.api.register_product.register_product)

    app.route('/v1/list')
        .get(app.api.list_products.list_products)

    app.route('/v1/list/category/:category')
        .get(app.api.products_by_category.products_by_category)

    app.route('/v1/list/title/:title')
        .get(app.api.products_by_title.products_by_title)

    app.route('/v1/update/:title')
        .put(app.api.update_product.update_product)

    app.route('/v1/update/category/:title')
        .put(app.api.edit_category.edit_category)

    app.route('/v1/delete/:title')
        .delete(app.api.delete_product.delete_product)
}