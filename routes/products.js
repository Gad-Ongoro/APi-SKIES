// route for products
const express = require('express');
const router = express.Router();
const Product = require('../models/Product');


// get all products
router.get('/products', async (req, res) => {
    try {
        const products = await Product.getAllProducts();
        res.json(products);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});
 
// get product by id
router.get('/products/:id', async (req, res) => {
    const { id } = req.params;
    try {
        const product = await Product.getProductById(id);
        res.json(product);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});
// get product by name
router.get('/products/name/:name', async (req, res) => {
    const { name } = req.params;
    //return results in json format
    try {
        const product = await Product.getProductByName(name);
        res.json(product);  
    } catch (err) {
        res.status(500).json({ error: err.message });

    
    }
});
// add product
router.post('/products', async (req, res) => {
    const { name, price } = req.body;
    try {
        const product = await Product.addProduct(name, price);
        res.json(product);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// update product
router.put('/products/:id', async (req, res) => {
    
    const { id } = req.params;
    const { name, price } = req.body;
    try {
        const product = await Product.updateProduct(id, name, price);
        res.json(product);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// delete product
router.delete('/products/:id', async (req, res) => {
    const { id } = req.params;
    try {
        const product = await Product.deleteProduct(id);
        res.json(product);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }   
});

