const inquirer = require('inquirer');
const fs = require('fs');
const util = require('util');
const Manager = require('./lib/Manager')

const writeFileAsync = util.promisify(fs.writeFile);

function role() {
   inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: "What is the Empoloyee's name?",
        },
        {
            type: 'input',
            name: 'id',
            message: `What is the employee's id?`,
        },
        {
            type: `input`,
            name: `email`,
            message:`What is the employee's email?`,
        },
        {
            type: 'list',
            name: 'role',
            choices: ['Employee', 'Engineer', 'Manager', 'Intern'],
        },
        {
            type: 'input',
            name: 'officeNumber',
            message: `What is the manager's office number?`,
            when: (data) => data.role === 'Manager', 
        },
        {
            type: 'input',
            name: 'github',
            message: `What is the engineer's Github?`,
            when: (data) => data.role === 'Engineer',
        },
    ])
    .then((answers) => console.log(new Manager(answers.name, answers.id, answers.email, answers.officeNumber)))
    .catch((err) => console.log(err))
    
}




role()

