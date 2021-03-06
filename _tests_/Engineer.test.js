const Engineer = require('../lib/Engineer');

describe('Engineer Class', () => {
    describe('Create new Engineer class', () => {
        it('Should create a new object from the Engineer Class', () => {
            // Act
            const engineer = new Engineer('Alex', 'C75', 'alexC@gmail.com', 'AlexC');
            // Assert
            expect(engineer).toBeInstanceOf(Engineer);
        });
    });
    describe('engineer.name', () => {
        it("Should assign the engineer's name", () => {
            // Act
            const engineer = new Engineer('Alex', 'C75', 'alexC@gmail.com', 'AlexC');
            // Assert
            expect(engineer.name).toEqual('Alex');
        });
    });
    describe('engineer.id', () => {
        it("Should assign the engineer's name", () => {
            // Act
            const engineer = new Engineer('Alex', 'C75', 'alexC@gmail.com', 'AlexC');
            // Assert
            expect(engineer.id).toEqual('C75');
        });
    });
    describe('engineer.email', () => {
        it("Should assign the engineer's email", () => {
            // Act
            const engineer = new Engineer('Alex', 'C75', 'alexC@gmail.com', 'AlexC');
            // Assert
            expect(engineer.email).toEqual('alexC@gmail.com');
        });
    });
    describe('engineer.github', () => {
        it("Should assign the engineer's github", () => {
            // Act
            const engineer = new Engineer('Alex', 'C75', 'alexC@gmail.com', 'AlexC');
            // Assert
            expect(engineer.github).toEqual('AlexC');
        });
    });
    describe('getName', () => {
        it("Should return the engineer's name", () => {
            // Act
            const engineer = new Engineer('Alex', 'C75', 'alexC@gmail.com', 'AlexC');
            // Assert
            expect(engineer.getName()).toEqual('Alex');
        });
    });
    describe('getId', () => {
        it("Should return the engineer's id", () => {
            // Act
            const engineer = new Engineer('Alex', 'C75', 'alexC@gmail.com', 'AlexC');
            // Assert
            expect(engineer.getId()).toEqual('C75');
        });
    });
    describe('getEmail', () => {
        it("Should return the engineer's email", () => {
            // Act
            const engineer = new Engineer('Alex', 'C75', 'alexC@gmail.com', 'AlexC');
            // Assert
            expect(engineer.getEmail()).toEqual('alexC@gmail.com');
        });
    });
    describe('getGithub', () => {
        it("Should return the engineer's github", () => {
            // Act
            const engineer = new Engineer('Alex', 'C75', 'alexC@gmail.com', 'AlexC');
            // Assert
            expect(engineer.getGithub()).toEqual('AlexC');
        });
    });
    describe('getRole', () =>{
        it('Should return the Engineer role', () => {
            // Act
            const engineer = new Engineer('Alex', 'C75', 'alexC@gmail.com', 'AlexC');
            // Assert
            expect(engineer.getRole()).toEqual('Engineer');
        });
    });
});
