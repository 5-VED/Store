const express=require('express');
const path= require('path');
const rootDir=require('../util/path');
const adminData = require('./admin');
const router=express.Router();
const shopController=require('../controllers/products');

router.get('/',shopController.getProducts);

module.exports = router;