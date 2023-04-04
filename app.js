const express = require('express');
const app = express();
const ejs=require("ejs");
const bodyparser = require('body-parser');
app.use(bodyparser.urlencoded({ extended: true }));
app.use(express.static('public'));
const https=require('https');
app.set('view engine', 'ejs');




app.get('/',function(req,res){
    res.render("index");
});
app.get('/services',function(req,res){
    res.render("services");
});

app.get('/about',function(req,res){
    res.render("about");
});




app.listen(3000, function () {
    console.log('Server started at 3000');
});