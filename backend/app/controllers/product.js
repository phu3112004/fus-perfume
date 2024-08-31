var product_md = require("../models/product");
var express = require("express");
var router = express.Router();

router.get("/api/products", (req, res) => {
  var products = product_md.getAllProducts();
  products
    .then(function (result) {
      res.json(result);
    })
    .catch(function (error) {
      res.json({ error: "cannot get all products" });
    });
});

router.get("/api/products/search", (req, res) => {
  var sex = req.query.sex;
  var products = product_md.getAllProductsBySex(sex);
  products
    .then(function (result) {
      res.json(result);
    })
    .catch(function (error) {
      res.json({ error: "cannot get all products by sex" });
    });
});

module.exports = router;
