class Employee {
    constructor(name, id, email){
        this.name = name;
        this.id = id;
        this.email = email;
    }
        //TODO: getName();
        getName(){
            return this.name;
        }
        

        //TODO: getId();
        getId() {
            return this.id;
        }


        //TODO: getEmail();
        getEmail(){
            return this.email;
        }

        //TODO: get Role that returns 'Employee'
        getRole(){
            return 'Employee'
        }
}

module.exports = Employee;