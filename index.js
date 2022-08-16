
const inquirer = require('inquirer')
const generateHtml = require('./src/teamGenerator')
const fs = require('fs');
const Engineer = require('./lib/Engineer');
const Manager = require('./lib/Manager');
const Intern = require('./lib/Intern');
let teamMembers = []

// manager questions
const managerQuestions = async () => {
    const managerQuestions = await inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: "enter managers's name",
        },
        {
            type: 'input',
            name: 'id',
            message: "enter managers's id number",
        },
        {
            type: 'input',
            name: 'email',
            message: "enter managers's email address",
        },
        {
            type: 'input',
            name: 'officeNumber',
            message: "enter managers's office number",
        }
    ]);
    const { name, id, email, officeNumber } = managerQuestions;
    const manager = new Manager(name, id, email, officeNumber);
    teamMembers.push(manager);
    addAnother()
};

//engineer questions

const employeeQuestions = async () => {
    const employeeQuestions = await inquirer.prompt(
        [{
            type: 'list',
            name: 'role',
            message: "add the next role",
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
            when: (input_1) => input_1.role === 'engineer',
            type: 'input',
            name: 'github',
            message: "enter engineer's github",
        },
        {
            when: (input_3) => input_3.role === 'intern',
            type: 'input',
            name: 'school',
            message: "enter interns's school",
        },
        ])
    let { name, id, email, role, github, school } = employeeQuestions;
    let employee;
    if (role === 'engineer') {
        employee = new Engineer(name, id, email, github);
        teamMembers.push(employee);
        addAnother()

    } else if (role === 'intern') {
        employee = new Intern(name, id, email, school);
        teamMembers.push(employee);
        addAnother()
    }

}

// asks if they would like to add another team member, if so it runs the employee questions again
const addAnother = async () => {
    const addAnother = await inquirer.prompt(
        [{
            type: 'confirm',
            name: 'addAnother',
            message: 'would you like to add another team member?',
            default: 'false'
        }])
    if (addAnother.addAnother === true) {
        return employeeQuestions();
    } else if (addAnother.addAnother === false) {
        startTeam()
    }
}

const init = (data) => {
    fs.writeFile('./dist/index.html', data, err => {
        err ? console.log(err) : console.log('new team created')
    })
}

// the function that creates everything
function startTeam() {
    let newPage = generateHtml(teamMembers)
    init(newPage)
}
managerQuestions()
