import Undead from '../Classes/Undead.js';

test('Правильно создаётся класс', () => {
	const undead = new Undead('Griffith');
	const correct = {
		name: 'Griffith',
		type: 'Undead',
		health: 100,
		level: 1,
		attack: 25,
		defence: 25,
	};

	expect(undead).toEqual(correct);
});