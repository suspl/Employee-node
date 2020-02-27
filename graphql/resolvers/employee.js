const employeeModel = require('../../models/employee');
module.exports = {
    getemployeeDetails: async () => {
        try {
            let result = await employeeModel.find({Active:"Yes"});
            //   let result = await employeeModel.find({Active:"Yes"}).sort({EmpID:-1}).limit(1);//orderby descending
            //let result = await employeeModel.find({Active:"Yes"}).sort({EmpID:1});//orderby ascending
            
            console.log(result);

            return result;
        } catch (err) {
        throw err;
        }
    }
    , 
    getEmpDetailsById: async (args, req) => {
        try{
            let Id = args.Id;
            //console.log("Id="+Id);
            let _filterquery={_id:Id,Active:"Yes"};
            let result = await employeeModel.findOne(_filterquery);
            // console.log("result="+result);
            return result;
        }catch (err) {
        throw err;
        }
    },
    addEmpDetails: async (args, req) => {
        try{
            let emp_result = await employeeModel.find({Active:"Yes"}).sort({EmpID:-1}).limit(1);//orderby descending
            let EmpID = parseInt(emp_result[0].EmpID)+1;
            
        // console.log("myobj="+args.empInput.dbType);
            var myobj = args.empInput;
            myobj["EmpID"] = EmpID;
            var myData = new employeeModel(myobj);
           // console.log("myData="+myData);
            await myData.save();
            return myData;
        }catch (err) {
        throw err;
        }
    },
    updateEmpDetailsById: async (args, req) => {
        try{
            let Id = args.Id;
            console.log("Id="+Id);
            let _filterquery={_id:Id};
            let _updatequery ={
                    FirstName:args.empInput.FirstName,
                    MiddleName:args.empInput.MiddleName,
                    LastName:args.empInput.LastName,
                    Initials:args.empInput.Initials,
                    FatherName:args.empInput.FatherName,
                    SpouseName:args.empInput.SpouseName,
                    DOB:args.empInput.DOB,
                    CompanyID:args.empInput.CompanyID,
                    Department:args.empInput.Department,
                    BusinessTitle:args.empInput.BusinessTitle,
                    ReportingPerson:args.empInput.ReportingPerson,
                    EmploymentType:args.empInput.EmploymentType,
                    JobBand:args.empInput.JobBand,
                    JoiningDate:args.empInput.JoiningDate,
                    MobileNo:args.empInput.MobileNo,
                    AlternateContactNo:args.empInput.AlternateContactNo,
                    PAN:args.empInput.PAN,
                    AADHAAR:args.empInput.AADHAAR,
                    PF_UAN:args.empInput.PF_UAN,
                    PassportNo:args.empInput.PassportNo,
                    ESI:args.empInput.ESI,
                    Active:args.empInput.Active,
                    email:args.empInput.email,
                    personalEmailId:args.empInput.personalEmailId,
                   // EmpID:args.empInput.EmpID,
                    bloodGroup:args.empInput.bloodGroup,
                    gender:args.empInput.gender,
                    ResignationDate:args.empInput.ResignationDate,
                    LeavingDate:args.empInput.LeavingDate,
                    EmergencyContactName:args.empInput.EmergencyContactName,
                    EmergencyContactNumber:args.empInput.EmergencyContactNumber,
                    EmergencyContactRelationship:args.empInput.EmergencyContactRelationship,
                    Active:args.empInput.Active,
                    UpdatedBy:args.empInput.UpdatedBy,
                    UpdatedDateTime:args.empInput.UpdatedDateTime,
                    BankName : args.empInput.BankName,
                    BankAccountNumber:args.empInput.BankAccountNumber,
                    IFSCCode:args.empInput.IFSCCode,
                    Shift:args.empInput.Shift
                    };
            let result = await employeeModel.findOneAndUpdate(_filterquery,_updatequery,{new: true});
            console.log(result);
            return result;
        }catch (err) {
        throw err;
        }
    },
    
    deleteEmpDetailsById: async (args, req) => {
        try{
            let Id = args.Id;
            //console.log("Id="+Id);
            let _filterquery={_id:Id};
            let _updatequery ={
                Active:"No"
                };
            let result = await employeeModel.findOneAndUpdate(_filterquery,_updatequery,{new: true});
            return result;
        }catch (err) {
        throw err;
        }
    },
    getReportingPersonsIDByRole: async (args, req) => {
        try{
            let BusinessTitle = args.BusinessTitle;
            let _filterquery={BusinessTitle:BusinessTitle,Active:"Yes"};
            let result = await employeeModel.find(_filterquery);
             console.log("result="+result);
            return result;
        }catch (err) {
        throw err;
        }
    },
    

    
};

