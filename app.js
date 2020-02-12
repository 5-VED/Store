//To import moules of http require() function is used
const path=require('path');
const http = require('http');
const express=require('express');

const body_parser=require('body-parser');
const rootDir=require('./util/path');
const hbs=require('express-handlebars');
const ejs=require('ejs');

//express() is a top level function exported by express module
const app = express();

//to use pug(jade) and ejs as template engine registration is not mandatory they are inbuilt
app.set('view engine','ejs');
app.set('views','views');



const adminRoutes=require('./routes/admin');
const shopRoutes=require('./routes/shop');


 
/*use() method is used to add another middleware function
// app.use((req,res,next)=>{
//     console.log('In the Middleware');
//     next();//It allows a piece of code of one middlewa re to enter another middleware or to send response
// });*/

app.use(body_parser.urlencoded({extended:false}));
app.use(express.static(path.join(__dirname , "public")));



app.use('/admin',adminRoutes);
app.use(shopRoutes);
app.use((req,res,next)=>{
    //if we are sending html file 
    //res.status(404).(path.join(rootDir,'views','404.html'));

    //Using Handlebars
    res.status(404).render('404',{title:'404 Error' , path : 'Error'});
});


//http module is required to create server 
const server = http.createServer(app);

//console.log(req.method,req.url);

server.listen(3000);