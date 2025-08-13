import Swordsman from '../Classes/Swordsman.js';

test('Правильно создаётся класс', () => {
	const swordsman = new Swordsman('Yami');
	const correct = {
		name: 'Yami',
		type: 'Swordsman',
		health: 100,
		level: 1,
		attack: 40,
		defence: 10,
	};

	expect(swordsman).toEqual(correct);
});