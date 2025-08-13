import Character from '../Classes/Character.js';

//Тестирование правильности имени персонажа
describe('Character name validation', () => {
    const invalidNames = ['A', 'VeryLongName', 12345];

    test.each(invalidNames)('should throw an error if name is invalid: %p', (name) => {
        expect(() => {
            new Character(name, 'Bowman');
        }).toThrow("Имя должно быть строкой от 2 до 10 символов.");
    });

    test('should not throw an error for a valid name', () => {
        expect(() => {
            new Character('Robin', 'Bowman');
        }).not.toThrow();
    });
});

//Тестирование правильности выбранного типа персонажа
describe('Character type validation', () => {
    const invalidTypes = ['Sorcerer', 'Ninja'];
    const validTypes = ['Bowman', 'Swordsman', 'Magician', 'Daemon', 'Undead', 'Zombie'];

    test.each(invalidTypes)('should not throw an error for a valid type', (type) => {
        expect(() => {
            new Character('Robin', type);
        }).toThrow();
    });

    test.each(validTypes)('should not throw an error for a valid type', (type) => {
        expect(() => {
            new Character('Robin', type);
        }).not.toThrow();
    });
});
