
const inquirer = require('inquirer')
const fs = require('fs')


const questions = [
{
name: 'userName',
message: "enter team member's name"
},
{
    name: 'id',
    message: "enter team member's id number"
    },
    {
        name: 'email',
        message: "enter team member's email address"
        }
]




function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, function(err){
        console.log(data),
        err ? console.log(err) : console.log('README.md has been made');
    })
}























module.exports = Vehicle;
