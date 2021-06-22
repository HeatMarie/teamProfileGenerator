const Manager = require('../lib/Manager');

describe('Manager Class', () => {
    describe("Create new Manager should be an instanceof Manager Class", () => {
        it("Should create a new Manager object", () => {
            //Act
            const manager = new Manager('Kelly', 'D22', 'kelly@gmail.com', 'B24');
            //Assert
            expect(manager).toBeInstanceOf(Manager);
        });
    });
    describe("manager.name", () => {
        it("should return the manager's name", () => {
            //Act
            const manager = new Manager('Kelly', 'D22', 'kelly@gmail.com', 'B24');
            // Assert
            expect(manager.name).toEqual('Kelly')
        });
    });
    describe('manager.id', () => {
        it('Should return the manager id', () => {
            // Act
            const manager = new Manager('Kelly', 'D22', 'kelly@gmail.com', 'B24');
            // Assert
            expect(manager.id).toEqual('D22');
        });
    });
    describe('manager.email', () => {
        it('Should return the manager email', () => {
            // Act
            const manager = new Manager('Kelly', 'D22', 'kelly@gmail.com', 'B24');
            // Assert
            expect(manager.email).toEqual('kelly@gmail.com');
        });
    });
    describe('manager.officeNumber', () => {
        it('Should return the manager office number', () => {
            // Act
            const manager = new Manager('Kelly', 'D22', 'kelly@gmail.com', 'B24');
            // Assert
            expect(manager.officeNumber).toEqual('B24');
        });
    });
    describe('getName', () => {
        it('Should get and return the managers name', () => {
            // Act
            const manager = new Manager('Kelly', 'D22', 'kelly@gmail.com', 'B24');
            // Assert
            expect(manager.getName()).toEqual('Kelly');
        });
    });
    describe('getId', () => {
        it('Should get and return the managers name', () => {
            // Act
            const manager = new Manager('Kelly', 'D22', 'kelly@gmail.com', 'B24');
            // Assert
            expect(manager.getId()).toEqual('D22');
        });
    });
    describe('getEmail', () => {
        it('Should get and return the managers name', () => {
            // Act
            const manager = new Manager('Kelly', 'D22', 'kelly@gmail.com', 'B24');
            // Assert
            expect(manager.getEmail()).toEqual('kelly@gmail.com');
        });
    });
    describe('getRole', () => {
        it('Should get and return the managers name', () => {
            // Act
            const manager = new Manager('Kelly', 'D22', 'kelly@gmail.com', 'B24');
            // Assert
            expect(manager.getRole()).toEqual('Manager');
        });
    });
});