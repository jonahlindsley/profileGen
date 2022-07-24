const Employees = require('./Employee')


class Intern extends Employees{
    constructor(name, id, email, school){
super(name, id, email)
this.school = school
}
getSchool(){
return this.school;
}
getRole(){
    return 'Intern'
}}

module.exports = Intern