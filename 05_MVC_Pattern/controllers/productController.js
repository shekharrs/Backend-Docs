const Product = require('../models/productModel');

// In Controller all the logic are specified for example Create, Read, Update, Delete

// Business Logic

// logic for read/view
const getProducts = async(req, res) => {
    try {
        const allProducts = await Product.find();

        // if products is not present
        if(!allProducts || allProducts.length === 0){
            res.json({
                message: "There is No Product"
            })
        }

        res.status(200).json({
            success: true,
            products: allProducts
        })
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        })
    }
}

// logic for create
const createProduct = async(req, res) => {
    try {
        const {name, price, description, category} = req.body;

        const newProduct = new Product({name, price, description, category});
        await newProduct.save();
        res.status(200).json({
            success: true,
            product: newProduct
        })
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        })
    }
}

// logic for update
const updateProduct = async(req, res) => {
    try {
        const {id} = req.params;
        const {name, price, description, category} = req.body;

        const updatedProduct = await Product.findByIdAndUpdate(id, {name, price, description, category}, {new: true});
        
        if(!updatedProduct){
            res.json({
                message: "Product Not Found!"
            })
        }

        res.status(200).json({
            success: true,
            product: updatedProduct
        })
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        })
    }
}

// logic for delete
const deleteProduct = async(req, res) => {
    try {
        const {id} = req.params;

        const deletedProduct = await Product.findByIdAndDelete(id);

        if(!deletedProduct){
            res.json({
                message: "Product is Not Found, Cannot delete!"
            })
        }

        res.status(200).json({
            message: "Product deleted Successfully!",
            success: true,
            product: deletedProduct
        })
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        })
    }
}

module.exports = {getProducts, createProduct, updateProduct, deleteProduct};