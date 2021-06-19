const inquirer = require('inquirer');
const fs = require('fs');
const util = require('util');
const Manager = require('./lib/Manager')
const Engineer = require('./lib/Engineer')
const Employee = require('./lib/Employee')
const Intern = require('./lib/Intern')

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
        {
            type: 'input',
            name: 'school',
            message: `What is the name of the school?`,
            when: (data) => data.role === 'Intern',
        },
        {
            type: 'confirm',
            name: 'newEmployee',
            message: 'Do you have another employee to add?'
        },
    ])
    
    .then((answers) => {
       
        if(answers.role === 'Manager'){
            console.log(new Manager(answers.name, answers.id, answers.email, answers.officeNumber)) 
        }else {
            if(answers.role === 'Engineer') {
                console.log(new Engineer(answers.name, answers.id, answers.email, answers.github))
            } else{
                if(answers.role === 'Intern'){
                    console.log(new Intern(answers.name, answers.id, answers.email, answers.school))
                } else{
                    console.log(new Employee(answers.name, answers.id, answers.email))
                    
                }
            }

        }
        if(answers.newEmployee === true){
            return role();
         }
    })

    .catch((err) => console.log(err))
    
}





role()

