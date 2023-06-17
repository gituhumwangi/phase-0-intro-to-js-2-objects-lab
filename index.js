// Write your solution in this file!
const employee = {
    Kibera:"John Kamau",
    Juja: "Daniel Odhiambo",
    Adams:"Denni Kiarie",
    Thika:"Lewis Makau",
    Ruiru:"Sharon Wambui",
    Karen:"Faith Atieno",

}
function updateEmployeeWithKeyAndValue (employee, key, value) {
    const newEmployee = {...employee}
    newEmployee[key] = value
    return newEmployee
}

function destructivelyUpdateEmployeeWithKeyAndValue (employee, key, value) {
    employee[key] = value
    return employee
}

function deleteFromEmployeeByKey (employee, key) {
    let newEmployee = (employee, 'name')
    delete newEmployee[key]
    return newEmployee
}

function destructivelyDeleteFromEmployeeByKey(employe, key) {
    let employee = (employe, 'name')
    delete employee.Adams
    return employee

}
