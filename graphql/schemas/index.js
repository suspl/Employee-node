const { buildSchema } = require('graphql');


module.exports = buildSchema(`

type EmpDetail {
    _id: ID!
    EmpID: Int! 
    FirstName: String!
    MiddleName: String
    LastName: String
    Initials: String
    FatherName: String
    SpouseName: String
    DOB: String
    Department: String
    JoiningDate: String
    BusinessTitle: String
    MobileNo: String
    AlternateContactNo: String
    PAN: String
    AADHAAR: String
    PF_UAN: String
    PassportNo: String
    ESI:String
    JobBand: String
    EmploymentType: String
    CompanyID: String
    LeavingDate: String
    ResignationDate: String
    ReportingPerson: String
    email: String
    personalEmailId : String
    bloodGroup : String
    gender: String
    EmergencyContactName: String
    EmergencyContactNumber: String
    EmergencyContactRelationship: String
    Active:String
    CreatedBy:String
    CreatedDateTime:String
    UpdatedDateTime:String
    UpdatedBy:String
    BankName : String
    BankAccountNumber:String
    IFSCCode:String
    Shift:String
}

input EmpInput {
    FirstName: String!
    MiddleName: String
    LastName: String
    Initials: String
    FatherName: String
    SpouseName: String
    DOB: String!
    Department: String!
    JoiningDate: String!
    BusinessTitle: String!
    MobileNo: String!
    AlternateContactNo: String!
    PAN: String!
    AADHAAR: String!
    PF_UAN: String!
    PassportNo: String!
    ESI:String
    JobBand: String!
    EmploymentType: String!
    CompanyID: String!
    LeavingDate: String!
    ResignationDate: String!
    ReportingPerson: String
    email: String!
    personalEmailId : String!
    bloodGroup : String!
    gender: String!
    EmergencyContactName: String!
    EmergencyContactNumber: String!
    EmergencyContactRelationship: String!
    Active:String!
    CreatedBy:String
    CreatedDateTime:String
    UpdatedDateTime:String
    UpdatedBy:String
    BankName : String!
    BankAccountNumber:String!
    IFSCCode:String!
    Shift:String!
}


type ConfigDetail{
    _id: ID
    Department: String 
    JobBand: String
    BusinessTitle: String
    EmploymentType: String
    PayPeriodType: String
    Period: String
    CompanyId: String
    DepID: String 
    Level:String
}


type RootQuery {
    getemployeeDetails: [EmpDetail!]!
    getEmpDetailsById(Id: ID!): EmpDetail!
    getConfigDetails: [ConfigDetail!]!
    getReportingPersonsIDByRole(BusinessTitle : String!): [EmpDetail]!
}

type RootMutation {
    addEmpDetails(empInput: EmpInput): EmpDetail!
    updateEmpDetailsById(Id: ID!,empInput: EmpInput): EmpDetail!
    deleteEmpDetailsById(Id: ID!): EmpDetail!
}

schema {
    query: RootQuery
    mutation: RootMutation
}
`);

