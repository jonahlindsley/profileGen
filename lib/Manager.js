
const Employees = require('./Employee')


class Manager extends Employees{
    constructor(name, id, email, officeNumber){
super(name, id, email)
this.officeNumber = officeNumber
}
getOfficeNumber(){
    return this.officeNumber
}
getRole(){
    return 'Manager'
}}




module.exports = Manager