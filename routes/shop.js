const express=require('express');
const path= require('path');
const rootDir=require('../util/path');
const adminData = require('./admin');
const router=express.Router();

const shopController=require('../controllers/shop');

router.get('/',shopController.getIndex);

router.get('/cart',shopController.getCart);

router.get('/orders',shopController.getOrders);

router.get('/products',shopController.getProducts);

router.get('/checkout',shopController.getCheckout);

module.exports = router;