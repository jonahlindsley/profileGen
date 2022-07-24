const Employees = require('./Employee')



class Engineer extends Employees{
    constructor(name, id, email, gitHub){
super(name, id, email)
this.gitHub = gitHub
}
getGitHub(){
return this.gitHub
}
getRole(){
    return 'Engineer'
}}


module.exports = Engineer