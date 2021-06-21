const Employee = require('./Employee');

class Engineer extends Employee {
    constructor(name, id, email, github){
        super(name, id, email);
        this.github = github
    }
    // TODO: getgithub();
    getGithub(){
        return this.github;
    }
    // TODO: getRole() - overridden to return 'Engineer'
    getRole() {
        return 'Engineer'
    }
}

module.exports = Engineer;