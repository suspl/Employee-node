const mongoose = require('mongoose');

const Schema = mongoose.Schema;


var userDatasSchema = new Schema({
    EmpID: Number, 
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
    ESI:String,
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
    EmergencyContactName: String,
    EmergencyContactNumber: String,
    EmergencyContactRelationship: String,
    Active:String,
    CreatedBy:String,
    CreatedDateTime:String,
    UpdatedDateTime:String,
    UpdatedBy:String,
    BankName : String,
    BankAccountNumber:String,
    IFSCCode:String,
    Shift:String
}, { collection: 'emp' });//---userDatas Document Properties


//var userModel = mongoose.model("emp", userDatasSchema);//---creating modal userDatas for collection
module.exports = mongoose.model("emp", userDatasSchema);//---creating modal userDatas for collection 

