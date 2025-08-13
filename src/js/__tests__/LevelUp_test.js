import Character from '../Classes/Character.js';
import Bowerman from '../Classes/Bowerman.js';

describe('Character levelUp method', () => {
	test('should increase level by 1', () => {
		const character = new Bowerman('Robin');
		character.levelUp();
		expect(character.level).toBe(2);
	});

	test('should increase attack and defence by 20%', () => {
        const character = new Bowerman('Robin');
        const initialAttack = character.attack; // сохраняем начальное значение атаки
        const initialDefence = character.defence; // сохраняем начальное значение защиты

        character.levelUp();

        expect(character.attack).toBeCloseTo(initialAttack * 1.2); // атака должна увеличиться на 20%
        expect(character.defence).toBeCloseTo(initialDefence * 1.2); // защита должна увеличиться на 20%
    });

    test('should restore health to 100', () => {
        const character = new Bowerman('Robin');
        character.health = 50; // уменьшаем здоровье
        character.levelUp();
        expect(character.health).toBe(100); // здоровье должно восстановиться до 100
    });

    test('should throw an error if health is at 0', () => {
        const character = new Bowerman('Robin');
        character.health = 0;
        expect(() => character.levelUp()).toThrow();
    });
});
