const express=require('express');
const path=require('path');
const rootDir=require('../util/path');
const productController = require('../controllers/products')

const router=express.Router();


// /admin/addproduct => GET
router.get('/addproduct',productController.getAddProducts);//We dont execute getProduct method as we are just passing reference to that file

// /admin/addproduct => POST
router.post('/addproduct',productController.postAddProduct);

module.exports=router;