const express = require("express");
const bodyParser = require("body-parser");
const app = express();

app.use(bodyParser.urlencoded({extended: true}))

app.post("/",function(req, res){
    var a = Number(req.body.num1);
    var b = Number(req.body.num2);
    var c = a + b;

    res.send("<h1> The result is: " + c + "</h1>");
})

app.get("/", function(req, res){
    res.sendFile(__dirname + "/index.html");
})

app.get("/bmicalculator", function(req, res){
    res.sendFile(__dirname + "/bmi.html");
})

app.post("/bmicalculator", function(req, res){
    var w = parseFloat(req.body.weight);
    var h = parseFloat(req.body.height);
    var n = w / (h * h) ;
    
    res.send("<h1> Your BMI is: " + n + "</h1>")
})


app.listen(3000, function(){
    console.log("Server Started");
})