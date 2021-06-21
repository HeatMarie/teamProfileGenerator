const Engineer = require('../lib/Engineer');

describe('Engineer Class', () => {
    describe('Create new Engineer class', () => {
        it('Should create a new object from the Engineer Class', () => {
            // Act
            const engineer = new Engineer('Alex', 'C75', 'alexC@gmail.com', 'AlexC');
            // Assert
            expect(new Engineer()).toBeInstanceOf(Engineer);
        });
    });
    describe('engineer.name', () => {
        it("Should return the engineer's name", () => {
            // Act
            const engineer = new Engineer('Alex', 'C75', 'alexC@gmail.com', 'AlexC');
            // Assert
            expect(engineer.name).toEqual('Alex');
        });
    });
    describe('engineer.id', () => {
        it("Should return the engineer's name", () => {
            // Act
            const engineer = new Engineer('Alex', 'C75', 'alexC@gmail.com', 'AlexC');
            // Assert
            expect(engineer.id).toEqual('C75');
        });
    });
});