const Employee = require('./Employee');

class Intern extends Employee {
    constructor(name, id, email, school){
        super(name, id, email);
        this.school = school;
    }
    // TODO getSchool();
    getSchool() {
        return this.school;
    }
    //TODO getRole(); - overridden to return 'Intern'
    getRole(){
        return 'Intern'
    }
}

module.exports = Intern;