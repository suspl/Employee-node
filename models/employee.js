const mongoose = require('mongoose');

const Schema = mongoose.Schema;


var userDatasSchema = new Schema({
    EmpID: String, 
    FirstName: String,
    MiddleName: String,
    LastName: String,
    Initials: String,
    FatherName: String,
    SpouseName: String,
    DOB: String,
    Department: String,
    JoiningDate: String,
    BusinessTitle: String,
    MobileNo: String,
    AlternateContactNo: String,
    PAN: String,
    AADHAAR: String,
    PF_UAN: String,
    PassportNo: String,
    JobBand: String,
    EmploymentType: String,
    CompanyID: String,
    LeavingDate: String,
    ResignationDate: String,
    ReportingPerson: String,
    email: String,
    personalEmailId : String,
    bloodGroup : String,
    gender: String,
    Active:String
}, { collection: 'emp' });//---userDatas Document Properties


//var userModel = mongoose.model("emp", userDatasSchema);//---creating modal userDatas for collection
module.exports = mongoose.model("emp", userDatasSchema);//---creating modal userDatas for collection 

