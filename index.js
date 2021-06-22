const inquirer = require('inquirer');
const fs = require('fs');
const util = require('util');
const generateHTML = require('./src/generateHTML')
const Manager = require('./lib/Manager')
const Engineer = require('./lib/Engineer')
const Employee = require('./lib/Employee')
const Intern = require('./lib/Intern')
const managerArray = [];
const engineerArray = [];
const employeeArray = [];
const internArray = [];

const writeFileAsync = util.promisify(fs.writeFile);
let html = ``
async function managerCard(){
    for(let i = 0; i < managerArray.length; i++){
    html += `<!-- Manager Card-->
    <div class="col">
        <div class="card" style="width: 18rem;">
            <div class="card-body">
                <div class="cardHead">
                    <h5 class="card-title">${managerArray[i].name}</h5>
                    <h6 class="card-subtitle mb-2"><span class="icon"><i class="fas fa-mug-hot"></i></span>Manager</h6>
                </div>
                <p class="card-text">ID: ${managerArray[i].id}</p>
                <p class="card-text">Office Number: ${managerArray[i].officeNumber}</p>
                <p class="card-text"><span class="icon">Email:</span><a href="mailto:${managerArray[i].email}" class="card-link"> ${managerArray[i].email}</a></p>
            </div>
        </div>
    </div>

    `
    }
}
// ------ TODO have github open new tab to git hub
async function engineerCard(){
    for(let i = 0; i < engineerArray.length; i++){
    html += `<!-- Engineer Card-->
    <div class="col">
        <div class="card" style="width: 18rem;">
            <div class="card-body">
                <div class="cardHead">
                    <h5 class="card-title">${engineerArray[i].name}</h5>
                    <h6 class="card-subtitle mb-2"><span class="icon"><i class="fas fa-glasses"></i></span>Engineer</h6>
                </div>
                <p class="card-text">ID: ${engineerArray[i].id}</p>
                <p class="card-text"><span class="icon">Email:</span><a href="mailto:${engineerArray[i].email}" class="card-link">${engineerArray[i].email}</a></p>
                <p class="card-text"><span class="icon">Github:</span><a href="https://github.com/${engineerArray[i].github}" target="_blank" class="card-link">${engineerArray[i].github}</a></p>
            </div>
        </div>
    </div>

    `
    }
}

async function employeeCard(){
    for(let i = 0; i < employeeArray.length; i++){
    html += `<!-- Employee Card-->
    <div class="col">
        <div class="card" style="width: 18rem;">
            <div class="card-body">
                <div class="cardHead">
                    <h5 class="card-title">${employeeArray[i].name}</h5>
                    <h6 class="card-subtitle mb-2"><span class="icon"><i class="fas fa-star"></i></span>Employee</h6>
                </div>
                <p class="card-text">ID: ${employeeArray[i].id}</p>
                <p class="card-text"><span class="icon">Email:</span><a href="mailto:${employeeArray[i].email}" class="card-link">${employeeArray[i].email}</a></p>
            </div>
        </div>
    </div>

    `
    }
}

async function internCard(){
    for(let i = 0; i < internArray.length; i++){
    html += `<!-- Engineer Card-->
    <div class="col">
        <div class="card" style="width: 18rem;">
            <div class="card-body">
                <div class="cardHead">
                    <h5 class="card-title">${internArray[i].name}</h5>
                    <h6 class="card-subtitle mb-2"><span class="icon"><i class="fas fa-graduation-cap"></i></span>Intern</h6>
                </div>
                <p class="card-text">ID: ${internArray[i].id}</p>
                <p class="card-text">School: ${internArray[i].school}</p>
                <p class="card-text"><span class="icon">Email:</span><a href="mailto:${internArray[i].email}" class="card-link">${internArray[i].email}</a>
            </div>
        </div>
    </div>

    `
    }
}


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
            message: `What is the employee's email?`,
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

        .then((response) => {
            let employee;
            if (response.role === 'Manager') {
                employee = new Manager(response.name, response.id, response.email, response.officeNumber)
                managerArray.push(employee)
                console.log('managerArray', managerArray)
                managerCard()
                console.log(new Manager(response.name, response.id, response.email, response.officeNumber))
            } else {
                if (response.role === 'Engineer') {
                    employee = new Engineer(response.name, response.id, response.email, response.github)
                    engineerArray.push(employee)
                    engineerCard()
                    console.log(new Engineer(response.name, response.id, response.email, response.github))
                } else {
                    if (response.role === 'Intern') {
                        employee = new Intern(response.name, response.id, response.email, response.school)
                        internArray.push(employee)
                        internCard()
                        console.log(new Intern(response.name, response.id, response.email, response.school))
                    }
                    else {
                        employee = new Employee(response.name, response.id, response.email)
                        employeeArray.push(employee)
                        employeeCard()
                        console.log(new Employee(response.name, response.id, response.email))
                    }
                }

            }
            console.log('managerArray', managerArray)
            console.log('engineerArray', engineerArray)
            console.log('internArray', internArray)
            console.log('employeeArray', employeeArray)
            if (response.newEmployee === true) {
                return role();
            }
            
            
        })
        
        .then((response) => writeFileAsync('./dist/index.html', generateHTML(response, html)))

        .catch((err) => console.log(err))

}





role()

