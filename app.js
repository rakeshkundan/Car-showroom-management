const express = require('express');
const app = express();
const ejs=require("ejs");
const bodyparser = require('body-parser');
app.use(bodyparser.urlencoded({ extended: true }));
app.use(express.static('public'));
const https=require('https');

app.set('view engine', 'ejs');

  
// var express = require("express"),
    mongoose = require("mongoose"),
    passport = require("passport"),
    bodyParser = require("body-parser"),
    LocalStrategy = require("passport-local"),
    passportLocalMongoose = 
        require("passport-local-mongoose")
const User = require("./model/User");
const Car=require("./model/car");
const Cardetail=require("./model/cardetail");
const Admin=require("./model/admin");
const Query=require("./model/query");
const car = require('./model/car');
// var app = express();

mongoose.connect("mongodb://localhost:27017/CarShowroomDB");

app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(require("express-session")({
    secret: "Rusty is a dog",
    resave: false,
    saveUninitialized: false
}));

app.use(passport.initialize());
app.use(passport.session());
  
passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

// app.get("/", function (req, res) {
//     res.render("home");
// });
  
// Showing secret page
app.get("/secret", isLoggedIn, function (req, res) {
    res.render("secret");
});
  
// Showing register form
app.get("/register", function (req, res) {
    res.render("register");
});
function isLoggedIn(req, res, next) {
    if (req.isAuthenticated()) return next();
    res.redirect("/login");
}
app.post("/register", async (req, res) => {
    User.findOne({username:req.body.username}).then((result)=>{
        if(result!=null)
        {
            res.redirect("/login");
        }
        else{
            User.register({ username: req.body.username,name:req.body.name}, req.body.password, (err, user) => {

                if (err) {
                    console.log(err);
                    res.redirect("/register");
                }
                else {
                    passport.authenticate("local")(req, res, () => {
                        const userName=req.user.name
                        res.redirect("/login");
                    });
                }

            });
        }
    })
  });

  app.get("/login", function (req, res) {
    if(req.isAuthenticated())
    res.render("index");
    else{
        res.render('login');
    }
});
app.post("/login", async function(req, res){
    const newUser = new User({
        username: req.body.username,
        password: req.body.password
    });
    req.login(newUser, function (err) {
        if (err) {
            res.redirect("/login");
        }
        else {
            passport.authenticate("local")(req, res, () => {
                res.render("index");
            });

        }
    })
});

app.get("/logout", function (req, res) {
    req.logout(function(err) {
        if (err) { return next(err); }
        res.redirect('/');
      });
});

app.get('/',function(req,res){
    res.render("index");
});
app.get('/index',function(req,res){
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
app.get("/admin",(req,res)=>{
    res.render("admin");
});
app.get("/admin/:listname",(req,res)=>{
    const listName = req.params.listname;
    res.render(listName);
})
// app.get('/toyota',function(req,res){
//     res.render("toyota")
// });
// app.get('/audi',function(req,res){
//     res.render("audi")
// });
// app.get('/bmw',function(req,res){
//     res.render("bmw")
// });
// app.get('/chevrolet',function(req,res){
//     res.render("chevrolet")
// });
// app.get('/toyotaprado',function(req,res){
//     res.render("toyotaprado");
    
// });
// app.get('/toyotainnova',function(req,res){
//     res.render("toyotainnova")
// });
// app.get('/toyotaetios',function(req,res){
//     res.render("toyotaetios")
// });
// app.get('/toyotacamry',function(req,res){
//     res.render("toyotacamry")
// });
// app.get('/toyotafortuner',function(req,res){
//     res.render("toyotafortuner")
// });
// app.get('/audia8',function(req,res){
//     res.render("audia8")
// });
// app.get('/auditt',function(req,res){
//     res.render("auditt")
// });
// app.get('/audiQ7',function(req,res){
//     res.render("audiQ7")
// });
// app.get('/audiRS7',function(req,res){
//     res.render("audiRS7")
// });
// app.get('/audiR8',function(req,res){
//     res.render("audiR8")
// });
// app.get('/bmwi8',function(req,res){
//     res.render("bmwi8")
// });
// app.get('/bmwm3',function(req,res){
//     res.render("bmwm3")
// });
// app.get('/bmwm4',function(req,res){
//     res.render("bmwm4")
// });
// app.get('/bmwx3',function(req,res){
//     res.render("bmwx3")
// });
// app.get('/bmwx6',function(req,res){
//     res.render("bmwx6")
// });
// app.get('/chevroletEnjoy',function(req,res){
//     res.render("chevroletEnjoy")
// });
// app.get('/chevroletSail',function(req,res){
//     res.render("chevroletSail")
// });
// app.get('/chevroletTrailBlazer',function(req,res){
//     res.render("chevroletTrailBlazer")
// });
// app.get('/chevroletCruze',function(req,res){
//     res.render("chevroletCruze")
// });
// app.get('/chevroletBeat',function(req,res){
//     res.render("chevroletBeat")
// });

// app.get('/mitsubishi',function(req,res){
//     res.render("mitsubishi")
// });
// app.get('/mCedia',function(req,res){
//     res.render("mCedia")
// });
// app.get('/mLancer',function(req,res){
//     res.render("mLancer")
// });
// app.get('/montero',function(req,res){
//     res.render("montero")
// });
// app.get('/mOutlander',function(req,res){
//     res.render("mOutlander")
// });
// app.get('/mPajero',function(req,res){
//     res.render("mPajero")
// });

// app.get('/AstonMartin',function(req,res){
//     res.render("AstonMartin")
// });

// app.get('/amDB11',function(req,res){
//     res.render("amDB11")
// });
// app.get('/amRapide',function(req,res){
//     res.render("amRapide")
// });
// app.get('/amVanquish',function(req,res){
//     res.render("amVanquish")
// });
// app.get('/amVantage',function(req,res){
//     res.render("amVantage")
// });
// app.get('/amVulcan',function(req,res){
//     res.render("amVulcan")
// });

app.get("/:companyName",(req,res)=>{
    companyName=req.params.companyName;
    if(companyName!="favicon.ico")
    Car.findOne({company:companyName}).then((rslt)=>{
        if(rslt!=null){
        let N=(rslt.carType).length;
        res.render("company",{result:(rslt.carType),n:N,companyName:companyName});  
        }
        else{
            res.redirect("/");
        }
    });    
});
app.get("/:companyName/:carName",(req,res)=>{
    const carname=req.params.carName;
    const companyName=req.params.companyName;
    console.log(carname +" "+companyName);
    Car.findOne({company:companyName}).then(function (result){
        // console.log(result);
        if(result!=null)
        {
            const carType=result.carType;
            let flag=true;
            for(let i=0;i<carType.length;++i){
                if(carType[i].route==carname)
                {
                    flag=false;
                    // console.log();
                    res.render("cardetail",{data:carType[i]});
                    break;
                }
            }
            if(flag)
            res.redirect("/companyName");
            
        }
        else{
            res.send('<script>alert("Not available"); window.location.href = "/"; </script>');
        }
    });
});






app.listen(3000, function () {
    console.log('Server started at 3000');
});