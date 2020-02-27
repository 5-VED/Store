const Product = require('../Models/product');

exports.getCart=(req,res,next)=>{
    res.render( 'shop/cart',{
        path:'/cart',
        title:'Cart'
    });
};

exports.getOrders=(req,res,next)=>{
    res.render( 'shop/orders',{
        path:'/orders',
        title:'Your Orders'
    });
};


exports.getIndex=(req,res,next)=>{
    Product.fetchall(products=>{
        res.render('shop/index',{
        prods :products,
        title:'Shop',
        path : '/'
        });
    });
};

exports.getCheckout=(req,res,next)=>{
    res.render('shop/checkout',{
        path:'/checkout',
        title :'/Checkout'
    });
};

exports.getProducts=(req,res,next)=>{
    Product.fetchall(products =>{
        res.render('shop/product-list',{
            prods : products,
            title : 'Products List',
            path : '/products'
        });
    });
}

    
