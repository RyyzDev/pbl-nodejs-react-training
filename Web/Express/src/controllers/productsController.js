const express = require('express')

const products = [
  { id: 1, title: "Fjallraven Backpack", price: 109.95, category: "men's clothing" },
  { id: 2, title: "Mens Slim Fit T-Shirts", price: 22.30, category: "men's clothing" },
  { id: 3, title: "Mens Cotton Jacket", price: 55.99, category: "men's clothing" },
  { id: 4, title: "Mens Casual Slim Fit", price: 15.99, category: "men's clothing" },
  { id: 5, title: "John Hardy Bracelet", price: 695.00, category: "jewelery" },
  { id: 6, title: "Solid Gold Petite Micropave", price: 168.00, category: "jewelery" },
  { id: 7, title: "White Gold Plated Princess", price: 9.99, category: "jewelery" },
  { id: 8, title: "Pierced Owl Rose Gold Plated", price: 10.99, category: "jewelery" },
  { id: 9, title: "WD 2TB Portable Hard Drive", price: 64.00, category: "electronics" },
  { id: 10, title: "SanDisk SSD 1TB", price: 109.00, category: "electronics" },
  { id: 11, title: "Silicon Power 256GB SSD", price: 109.00, category: "electronics" },
  { id: 12, title: "WD 4TB Gaming Hard Drive", price: 114.00, category: "electronics" },
  { id: 13, title: "Acer SB220Q 21.5-Inch Monitor", price: 599.00, category: "electronics" },
  { id: 14, title: "Samsung 49-Inch Curved Monitor", price: 999.99, category: "electronics" },
  { id: 15, title: "BIYLACLESEN Women's Raincoat", price: 39.99, category: "women's clothing" }
];

exports.getAllProducts = (req, res) => {
    res.status(200).json(products);
}

exports.createNewProduct = (req, res) => {
      const newProducts = {
            id: products.length + 1,
            title: req.body.title,
            price: parseInt(req.body.price),
            category: req.body.category
        }
    
        products.push(newProducts);

        res.json({
            message: 'Success Created Data',
            data: newProducts
        })
}

exports.getProductById = (req, res) => {
    const product = products.find(m => m.id === parseInt(req.params.id))
    if(!product){
        res.json({
            message: 'data not found'
        })
    }

    res.json({
        message: `Success get data with id ${req.params.id}`,
        data: product
    })
}

exports.updateProductById = (req, res) => {
    const product = products.find(m => m.id === parseInt(req.params.id))
    if(!product){
        res.json({
            message: 'Data not found'
        })
    }
    
    product.title = req.body.title
    product.price =  req.body.price
    product.category = req.body.price

    res.status(200).json({
        message: 'success update data',
        data: product
    })
}

exports.deleteProductById = (req,res) => {
    const product = products.filter(m => m.id === parseInt(req.params.id))
    if(!product){
        res.json({
            message: 'Data not found'
        })
    }

    res.status(200).json({
        message: 'Data has been deleted'
    })
}