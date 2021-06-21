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
                <h5 class="card-title">${managerArray[i].name}</h5>
                <h6 class="card-subtitle mb-2 text-muted">Manager</h6>
                <p class="card-text">${managerArray[i].id}</p>
                <p class="card-text">${managerArray[i].officeNumber}</p>
                <a href="mailto:${managerArray[i].email}" class="card-link">Email</a>
                <a href="#" class="card-link">Another link</a>
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
                <h5 class="card-title">${engineerArray[i].name}</h5>
                <h6 class="card-subtitle mb-2 text-muted">Engineer</h6>
                <p class="card-text">${engineerArray[i].id}</p>
                <p class="card-text">${engineerArray[i].github}</p>
                <a href="mailto:${engineerArray[i].email}" class="card-link">Email</a>
                <a href="#" class="card-link">Another link</a>
            </div>
        </div>
    </div>

    `
    }
}

async function employeeCard(){
    for(let i = 0; i < employeeArray.length; i++){
    html += `<!-- Engineer Card-->
    <div class="col">
        <div class="card" style="width: 18rem;">
            <div class="card-body">
                <h5 class="card-title">${employeeArray[i].name}</h5>
                <h6 class="card-subtitle mb-2 text-muted">Employee</h6>
                <p class="card-text">${employeeArray[i].id}</p>
                <a href="mailto:${employeeArray[i].email}" class="card-link">Email</a>
                <a href="#" class="card-link">Another link</a>
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
                <h5 class="card-title">${internArray[i].name}</h5>
                <h6 class="card-subtitle mb-2 text-muted">Employee</h6>
                <p class="card-text">${internArray[i].id}</p>
                <p class="card-text">${internArray[i].school}</p>
                <a href="mailto:${internArray[i].email}" class="card-link">Email</a>
                <a href="#" class="card-link">Another link</a>
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

