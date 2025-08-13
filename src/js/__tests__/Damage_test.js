import Character from '../Classes/Character.js';
import Bowerman from '../Classes/Bowerman.js';

describe('Character damage method', () => {
	test('should throw an error if health is at 0', () => {
		const character = new Bowerman('Robin');
		character.health = 0;
		character.damage(20);
		expect(character.health).toBe(0);
	});

	test('should damage according to points', () => {
		const character = new Bowerman('Robin');
		character.damage(10);
		expect(character.health).toBe(92.5);
	});
	test('health should not drop below 0', () => {
		const character = new Bowerman('Robin');
		character.health = 25;
		character.damage(100);
		expect(character.health).toBe(0);
	});		
});
