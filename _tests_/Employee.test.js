const Employee = require('../lib/Employee');

describe('Employee Class', () => {
    describe("Create new Employee should be an instanceof Employee class", () => {
        //Test
        it("Should create a new Employee object", () => {
            //Act
            const employee = new Employee('Heather', 'B250', 'h.m.bjoin@gmail.com');
            //Assert
            expect(new Employee()).toBeInstanceOf(Employee);

        })
    });
    describe("employee.name", () => {
        it("Should return the Employee name", () => {
            // Act
            const employee = new Employee('Heather', 'B250', 'h.m.bjoin@gmail.com');
            //Assert
            expect(employee.name).toEqual('Heather')
        });
    });
    describe("employee.id", () => {
        it("Should return a string of the Employee ID", () => {
            // Act
            const employee = new Employee('Heather', 'B250', 'h.m.bjoin@gmail.com');
            //Assert
            expect(employee.id).toEqual('B250')
        });
    });
    describe("employee.email", () => {
        it("Should return a string of the Employee email", () => {
            // Act
            const employee = new Employee('Heather', 'B250', 'h.m.bjoin@gmail.com');
            //Assert
            expect(employee.email).toEqual('h.m.bjoin@gmail.com')
        });
    });
    describe("getname", () => {
        it("Should return a string of the Employee email", () => {
            // Act
            const employee = new Employee('Heather', 'B250', 'h.m.bjoin@gmail.com');
            //Assert
            expect(employee.getName()).toEqual('Heather')
        });
    });
    describe("getId", () => {
        it("Should return a string of the Employee email", () => {
            // Act
            const employee = new Employee('Heather', 'B250', 'h.m.bjoin@gmail.com');
            //Assert
            expect(employee.getId()).toEqual('B250')
        });
    });
    describe("getEmail", () => {
        it("Should return the Employee email", () => {
            // Act
            const employee = new Employee('Heather', 'B250', 'h.m.bjoin@gmail.com');
            //Assert
            expect(employee.getEmail()).toEqual('h.m.bjoin@gmail.com')
        });
    });
    describe("getRole", () => {
        it("Should return the Employee role", () => {
            // Act
            const employee = new Employee('Heather', 'B250', 'h.m.bjoin@gmail.com');
            //Assert
            expect(employee.getRole()).toEqual('Employee')
        });
    });
});