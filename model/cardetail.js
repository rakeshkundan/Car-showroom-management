
const mongoose = require('mongoose')
const Schema = mongoose.Schema;
const src=new Schema({
    src:String
});
const Cardetail=new Schema({
    carCompany:String,
    carName:{
        type:String,
        required:[true,'Please enter the name of your vehicle']
    },
    route:String,
    carHeading:String,
    avaibality:Number,
    milage:String,
    fuelType:String,
    serviceCost:String,
    tankCapacity:String,
    engine:String,
    BHP:String,
    cylinderCount:Number,
    gearCount:Number,
    tranmission:String,
    rearAcVent:String,
    seatingCapicity:Number,
    bootSpace:String,
    Abs:String,
    driverAirbag:String,
    parkingSensor:String,
    AirBag:String,
    discription:String,
    imgsrc:String,
    images:[src],
    ref:String
})
module.export =Schema(Cardetail);











