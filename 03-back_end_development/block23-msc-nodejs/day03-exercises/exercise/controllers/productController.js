const express = require('express');
const { StatusCodes } = require('http-status-codes');
const ProductModel = require('../models/productModel');
const ProductService = require('../services/productService');

const router = express.Router();

router
  .route('/')
  .get(async (_req, res) => {
    const products = await ProductModel.getAll();

    res.json(products);
  })
  .post(async (req, res, next) => {
    const { name, brand } = req.body;
  
    const newProduct = await ProductService.add(name, brand);
    if (newProduct.code) return next(newProduct);
  
    res.status(StatusCodes.CREATED).json(newProduct);
  });

router
  .route('/:id')
  .get(async (req, res, next) => {
    const product = await ProductService.getById(req.params.id);
    if (product.code) return next(product);

    res.json(product);
  })
  .put(async (req, res, next) => {
    const { name, brand } = req.body;

    const products = await ProductService.update(req.params.id, name, brand);
    if (products.code) return next(products);

    res.json(products);
  })
  .delete(async (req, res, next) => {
    const products = await ProductService.exclude(req.params.id);
    if (products.code) return next(products);

    return res.json(products);
  });

module.exports = router;