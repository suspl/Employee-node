const mongoose = require('mongoose');

const Schema = mongoose.Schema;

var configtableSchema = new Schema({
    Department: String, 
    JobBand: String, 
    BusinessTitle: String,
    EmploymentType: String,
    PayPeriodType: String,
    Period: String,
    CompanyId: String,
    DepID: String,
    Level:String

}, { collection: 'config' })//---configtable Document Properties

//var configModel = mongoose.model("configtable", configtableSchema);//---creating modal configtable for collection
module.exports = mongoose.model("config", configtableSchema);//---creating modal configtable for collection