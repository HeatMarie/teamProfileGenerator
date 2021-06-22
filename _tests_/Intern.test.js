const Intern = require('../lib/Intern');

describe('Intern Class', () => {
    describe('Create Intern Object', () =>{
        it('Should create an object from the Intern Class', () => {
            // Act
            const intern = new Intern('Nathan', 't454', 'nathanT@gmail.com', 'University of Coolness');
            // Assert
            expect(intern).toBeInstanceOf(Intern)
        });
    });
    describe('engineer.name', () =>{
        it('Should assign a name to Intern object', () => {
            // Act
            const intern = new Intern('Nathan', 't454', 'nathanT@gmail.com', 'University of Coolness');
            // Assert
            expect(intern.name).toEqual('Nathan')
        });
    });
    describe('engineer.id', () =>{
        it('Should assign an id to Intern object', () => {
            // Act
            const intern = new Intern('Nathan', 't454', 'nathanT@gmail.com', 'University of Coolness');
            // Assert
            expect(intern.id).toEqual('t454')
        });
    });
    describe('engineer.email', () =>{
        it('Should assign an email to Intern object', () => {
            // Act
            const intern = new Intern('Nathan', 't454', 'nathanT@gmail.com', 'University of Coolness');
            // Assert
            expect(intern.email).toEqual('nathanT@gmail.com')
        });
    });
    describe('engineer.school', () =>{
        it('Should assign a school to Intern object', () => {
            // Act
            const intern = new Intern('Nathan', 't454', 'nathanT@gmail.com', 'University of Coolness');
            // Assert
            expect(intern.school).toEqual('University of Coolness')
        });
    });
    describe('getName', () =>{
        it('Should return the Intern name', () => {
            // Act
            const intern = new Intern('Nathan', 't454', 'nathanT@gmail.com', 'University of Coolness');
            // Assert
            expect(intern.getName()).toEqual('Nathan')
        });
    });
    describe('getId', () =>{
        it('Should return the Intern name', () => {
            // Act
            const intern = new Intern('Nathan', 't454', 'nathanT@gmail.com', 'University of Coolness');
            // Assert
            expect(intern.getId()).toEqual('t454')
        });
    });
    describe('getEmail', () =>{
        it('Should return the Intern name', () => {
            // Act
            const intern = new Intern('Nathan', 't454', 'nathanT@gmail.com', 'University of Coolness');
            // Assert
            expect(intern.getEmail()).toEqual('nathanT@gmail.com');
        });
    });
    describe('getSchool', () =>{
        it('Should return the Intern name', () => {
            // Act
            const intern = new Intern('Nathan', 't454', 'nathanT@gmail.com', 'University of Coolness');
            // Assert
            expect(intern.getSchool()).toEqual('University of Coolness');
        });
    });
    describe('getRole', () =>{
        it('Should return the Intern name', () => {
            // Act
            const intern = new Intern('Nathan', 't454', 'nathanT@gmail.com', 'University of Coolness');
            // Assert
            expect(intern.getRole()).toEqual('Intern');
        });
    });
});