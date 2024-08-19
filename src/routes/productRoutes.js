const app = require("./app-express.js");

const { Product, ProductImage, ProductOption } = require("../models/Models.js");

app.get("/", (req, res) => {
    res.send("Olá, mundo");
});


app.get("/v1/product/search", async (request, res) => {
    console.log(request.query);
    const produtos = await Product.findAll({ limit: 30 });

    Product.findAll({ where: { id: request.params.id } });
    res.send(produtos);
});


app.get("/v1/product/:id", (request, res) => {
    console.log("request.url", request.url); // debug
    console.log("request.params.id", request.params.id);

    Product.findOne({ where: { id: request.params.id } }).then((result) =>
        res.send(result)
    );
});


app.get("/v1/product/", (request, res) => {
    console.log("request.url", request.url); // debug

    Product.findAll().then((result) => res.send(result));
});


app.delete("/v1/product/:id", (request, res) => {
    console.log("request.url", request.url); // debug
    Product.destroy({ where: { id: request.params.id } }).then((result) => {
        res.send("deletei com sucesso essa quantidade de linhas: " + result);
    });
});


app.post("/v1/product", async (request, res) => {
    // console.log("request.url", request.url); // debug
    // console.log("request.body", request.body);
    console.log(request.body.imagensDoProduto)

    const imagensDoProduto = request.body.imagensDoProduto

    const produtoCriado = await Product.create(request.body)

    if (imagensDoProduto) {
        await ProductImage.bulkCreate(imagensDoProduto.map((image) => ({
            product_id: produtoCriado.id,
            path: image.content,
        })))
    }

    if (request.body.options) {
        await ProductOption.bulkCreate(request.body.options.map((option) => ({
            product_id: produtoCriado.id,
            ...option
        })))
    }

    res.status(201).send(produtoCriado);
});


app.put("/v1/product/:id", (request, res) => {
    console.log("request.url", request.url); // debug
    console.log("request.body", request.body);
    Product.update(request.body, { where: { id: request.params.id } }).then(
        (result) => res.send(result)
    );
});