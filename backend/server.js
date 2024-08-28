const express = require('express');
const cors = require('cors'); 
const app = express();
var config = require('./config/default.json')
var product_md = require('./app/models/product')

const port = config.server.port;

app.use(cors()); 

app.get('/api/products', (req, res) => {
    var products = product_md.getAllProducts()
    products.then(function(result){
        res.json(result)
    }).catch(function(error){
        res.json({error: "cannot get all products"})
    })
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
