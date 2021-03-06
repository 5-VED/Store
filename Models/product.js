const path = require('path');
const fs = require('fs');

       const p = path.join(path.dirname(process.mainModule.filename),
       'data',
       'products.json');

    const getProductsFromFile = cb => {

    const p = path.join(path.dirname(process.mainModule.filename),
    'data',
    'products.json');

    fs.readFile(p,(err,fileContent)=>{
        if(err){
          return cb([]);
        }else{
            cb (JSON.parse(fileContent));
        }
    });
    //return products;
};

module.exports = class Product{
    
    constructor(title,imageUrl,price,description){
        this.title = title;
        this.imageUrl=imageUrl;
        this.price=price;
        this.description=description;
    }

    save(){
        getProductsFromFile(products=>{
            products.push(this);
            fs.writeFile(p,JSON.stringify(products),(err)=>{
                console.log(err);
            });
        });
        //fs.readFile(p,(err,fileContent)=>{
            
            
            // let products = [];
            // if(!err){
            //     products=JSON.parse(fileContent);
            // }
            
            // products.push(this);
            // fs.writeFile(p,JSON.stringify(products),(err)=>{
            //     console.log(err);
            // })
        }


    static fetchall(cb){ 
        getProductsFromFile(cb);
        // const p = path.join(path.dirname(process.mainModule.filename),
        // 'data',
        // 'products.json');

        // fs.readFile(p,(err,fileContent)=>{
        //     if(err){
        //          cb([]);
        //     }
        //     cb( JSON.parse(fileContent));
        // });
        //return products;
    }
}