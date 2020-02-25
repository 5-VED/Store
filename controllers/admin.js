const Products = require('../Models/product');

exports.getAddProducts=(req,res,next)=>{
    res.render('admin/addproduct',{
        title:'Add Product', 
        path: '/admin/addproduct',
        formsCSS: true, 
        productCSS: true, 
        activeAddProduct: true });
}

exports.postAddProduct=(req,res,next)=>{
    const product = new Products(req.body.title); 
    product.save();
    res.redirect('/');
}

exports.getProducts=(req,res,next)=>{
     Products.fetchall((products=>{
            res.render('admin/products',{
            prods:products,
            title:'Admin Products',
            path :'/admin/products' , 
            hasProducts: products.length > 0,
            activeShop: true,
            productCSS: true
        });
     })); 
}


