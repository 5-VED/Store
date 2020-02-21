const http = require('http');

const express= require('express');

const bodyParser = require('body-parser');

const app=express();

app.use(bodyParser.urlencoded({extended : true}));


app.get('/',(req,res,next)=>{
  res.sendFile(__dirname + "/bmi_calc.html");
});

app.post('/',(req,res)=>{

    var num1 = Number(req.body.weight);
    var num2 = parseFloat(req.body.height);

    var bmi = (num1/(num2*num2));
    res.send("Your BMI is "+ bmi);
});

const server = http.createServer(app);

server.listen(3000);