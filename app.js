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
app.get('/contact',function(req,res){
    res.render("contact")
});
app.get('/toyota',function(req,res){
    res.render("toyota")
});
app.get('/audi',function(req,res){
    res.render("audi")
});
app.get('/bmw',function(req,res){
    res.render("bmw")
});
app.get('/chevrolet',function(req,res){
    res.render("chevrolet")
});
app.get('/toyotaprado',function(req,res){
    res.render("toyotaprado")
});
app.get('/toyotainnova',function(req,res){
    res.render("toyotainnova")
});
app.get('/toyotaetios',function(req,res){
    res.render("toyotaetios")
});
app.get('/toyotacamry',function(req,res){
    res.render("toyotacamry")
});
app.get('/toyotafortuner',function(req,res){
    res.render("toyotafortuner")
});
app.get('/audia8',function(req,res){
    res.render("audia8")
});
app.get('/auditt',function(req,res){
    res.render("auditt")
});
app.get('/audiQ7',function(req,res){
    res.render("audiQ7")
});
app.get('/audiRS7',function(req,res){
    res.render("audiRS7")
});
app.get('/audiR8',function(req,res){
    res.render("audiR8")
});
app.get('/bmwi8',function(req,res){
    res.render("bmwi8")
});
app.get('/bmwm3',function(req,res){
    res.render("bmwm3")
});
app.get('/bmwm4',function(req,res){
    res.render("bmwm4")
});
app.get('/bmwx3',function(req,res){
    res.render("bmwx3")
});
app.get('/bmwx6',function(req,res){
    res.render("bmwx6")
});
app.get('/chevroletEnjoy',function(req,res){
    res.render("chevroletEnjoy")
});
app.get('/chevroletSail',function(req,res){
    res.render("chevroletSail")
});
app.get('/chevroletTrailBlazer',function(req,res){
    res.render("chevroletTrailBlazer")
});
app.get('/chevroletCruze',function(req,res){
    res.render("chevroletCruze")
});
app.get('/chevroletBeat',function(req,res){
    res.render("chevroletBeat")
});

app.get('/mitsubishi',function(req,res){
    res.render("mitsubishi")
});
app.get('/mCedia',function(req,res){
    res.render("mCedia")
});
app.get('/mLancer',function(req,res){
    res.render("mLancer")
});
app.get('/montero',function(req,res){
    res.render("montero")
});
app.get('/mOutlander',function(req,res){
    res.render("mOutlander")
});
app.get('/mPajero',function(req,res){
    res.render("mPajero")
});

app.get('/AstonMartin',function(req,res){
    res.render("AstonMartin")
});

app.get('/amDB11',function(req,res){
    res.render("amDB11")
});
app.get('/amRapide',function(req,res){
    res.render("amRapide")
});
app.get('/amVanquish',function(req,res){
    res.render("amVanquish")
});
app.get('/amVantage',function(req,res){
    res.render("amVantage")
});
app.get('/amVulcan',function(req,res){
    res.render("amVulcan")
});






app.listen(3000, function () {
    console.log('Server started at 3000');
});