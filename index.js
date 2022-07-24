
const inquirer = require('inquirer')
const fs = require('fs');
const Engineer = require('./lib/Engineer');
const Manager = require('./lib/Manager');
const Intern = require('./lib/Intern');
let teamMembers = []
const managerQuestions = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: "enter team member's name",
        },
        {
            type: 'input',
            name: 'id',
            message: "enter team member's id number",
        },
        {
            type: 'input',
            name: 'email',
            message: "enter team member's email address",
        },
        {
            type: 'input',
            name: 'officeNumber',
            message: 'enter managers office number',
        }
    ]).then(managerQuestions => {
        const { name, id, email, officeNumber } = managerQuestions;
        const manager = new Manager(name, id, email, officeNumber)
        teamMembers.push(manager)
        console.log(manager)
    })
};

//engineer questions

const employeeQuestions = () => {
    return inquirer.prompt(
        [{
            type: 'list',
            name: 'role',
            message: "choose a new role",
            choices: ['engineer', 'intern']
        },
        {
            type: 'input',
            name: 'name',
            message: "enter employee's name",
        },
        {
            type: 'input',
            name: 'id',
            message: "enter employee's id number",
        },
        {
            type: 'input',
            name: 'email',
            message: "enter employee's email address",
        },
        {
            when: (input) => input.role === 'engineer',
            type: 'input',
            name: 'gitHub',
            message: "enter engineer's github",
        },
        {
            when: (input) => input.role === 'intern',
            type: 'input',
            name: 'school',
            message: "enter interns's school",
        },
        {
            type: 'confirm',
            name: 'addAnother',
            message: 'would you like to add another team member?',
            default: 'false'
        }
        ])
        .then(employeeQuestions => {
            let { name, id, email, role, github, school, addAnother } = employeeQuestions;
            let employee;
            if (role === 'engineer') {
                employee = new Engineer(name, id, email, github)
                console.log(employee)
            } else if (role === 'intern') {
                employee = new Intern(name, id, email, school)
                console.log(employee)
            }
            teamMembers.push(employee);
            if (addAnother) {
                return employeeQuestions(teamMembers);
            } else {
                return teamMembers;
            }
        })
}






const init = (data) => {
    fs.writeFile('./dist/index.html', data, err => {
        console.log(data)
        err ? console.log(err) : console.log('new team created')
    })
}


managerQuestions()
.then(
    employeeQuestions().then(teamMembers => {
        return teamMembers;
    })
);


// managerQuestions()
// .then(employeeQuestions()).then(teamMembers => {
//     return generateHtml(teamMembers)
// }).then(pageHtml => {
//     return init(pageHtml)
// }).catch(err => {
//     console.log(err)
// })
