                    //COmments of admin Model

//first method
//res.send('<form action="/admin/addproduct" method="POST"><input type="text" name="title"><button type="submit">Add Product</button></form>');

    // //we can also show the path in following way
    //res.sendFile(path.join(__dirname,'..','views','shop.html'));
    
    //show path to views
    //res.sendFile(path.join(rootDir,'views','addproduct.html'));



//second method
//console.log(req.body);
//products.push({title:req.body.title});


//Third Method
//res.send('<h1 align="center"> Hello from Express.js</h1>');

    //res.sendFile(path.join(__dirname,'..','views','shop.html'));

    //sending html file on view
    //res.sendFile(path.join(rootDir,'views','shop.html'));
    
    //using handlebars
   //const products=adminData.products;