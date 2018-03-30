const mongoose=require('mongoose');
const Schema = mongoose.Schema;

const employeeSchema = new Schema({
    statusOfApplication:[{
    //Array of Objects for Status of Application
    statusOfFinanceDepartment : Boolean,
    statusOfVerificationDepartment : Boolean,
    statusOfTechnicalDepartment : Boolean  //It means they have appointed a Line Man

    //We will Think About It
    // addEmployee : [{
    //     name : String,
    //     id : String,
    //     department : String
    // }]


}],

});
module.exports=mongoose.model('employee',employeeSchema);
