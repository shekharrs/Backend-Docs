const express = require('express');
const router = express.Router();
const {getProducts, updateProduct, createProduct, deleteProduct} = require('../controllers/productController');

// Read (view)
router.get('/products', getProducts);

// Create
router.post('/products', createProduct);

// Update
router.put('/products/:id', updateProduct)

// Delete
router.delete('/products/:id', deleteProduct);

module.exports = router;