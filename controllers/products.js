const Products = require('../Models/product');

exports.getAddProducts= (req,res,next)=>{
    //res.send('<form action="/admin/addproduct" method="POST"><input type="text" name="title"><button type="submit">Add Product</button></form>');

    // //we can also show the path in following way
    //res.sendFile(path.join(__dirname,'..','views','shop.html'));
    
    //show path to views
    //res.sendFile(path.join(rootDir,'views','addproduct.html'));

    res.render('admin/addproduct',{
        title:'Add Product', 
        path: '/admin/addproduct',
        formsCSS: true, 
        productCSS: true, 
        activeAddProduct: true });
}

exports.postAddProduct=(req,res,next)=>{
    //console.log(req.body);
    //products.push({title:req.body.title});
    const product = new Products(req.body.title); 
    product.save();
    res.redirect('/');
}

exports.getProducts=(req,res,next)=>{
    //res.send('<h1 align="center"> Hello from Express.js</h1>');

    //res.sendFile(path.join(__dirname,'..','views','shop.html'));

    //sending html file on view
    //res.sendFile(path.join(rootDir,'views','shop.html'));
    
    //using handlebars
   //const products=adminData.products;
     Products.fetchall((products=>{
            res.render('shop/product-list',{
            prods:products,
            title :'Shop',
            path :'/' , 
            hasProducts: products.length > 0,
            activeShop: true,
            productCSS: true
        });
     })); 


}

exports.cartControllerLogic=(req,res,next)=>{
    res.render('cart');
    title : cart
};