const employee = {
    name: "John Favreau",
    streetAddress: "123 Main St.",
}
//console.log(employee)
function updateEmployeeWithKeyAndValue(obj, key, value) {
    const updateEmployee = {...obj};
    updateEmployee[key] = value;
    return updateEmployee;
}

function destructivelyUpdateEmployeeWithKeyAndValue(obj, key, value) {
    obj[key] = value;
    return obj;
}

function deleteFromEmployeeByKey(obj, key) {
    const employeeClone = {...obj};
    delete employeeClone[key];
    return employeeClone; 
}
function destructivelyDeleteFromEmployeeByKey(obj, key) {
    delete obj[key];
    return obj;
}












//const employee = {
//    name : "Jimmy McGill",
  //  streetAddress : "123 Main St",
//}

//function updateEmployeeWithKeyAndValue(obj, key, value) {
//    const employeeUpdate = {...employee};
//    employeeUpdate.streetAddress = value;
//    return employeeUpdate;
//}

//function destructivelyUpdateEmployeeWithKeyAndValue(obj, key, value) {
//    employee.streetAddress = value;
//    return employee;
//}

//function deleteFromEmployeeByKey(obj, key) {
//    const employeeUpdate = {...employee};
//    delete employeeUpdate.name;
//    return employeeUpdate;
//}

//function destructivelyDeleteFromEmployeeByKey(obj, key) {
//    delete employee.name;
//    return employee;
//}