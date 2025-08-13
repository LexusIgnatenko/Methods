import Magician from '../Classes/Magician.js';

test('Правильно создаётся класс', () => {
	const magician = new Magician('Julius');
	const correct = {
		name: 'Julius',
		type: 'Magician',
		health: 100,
		level: 1,
		attack: 10,
		defence: 40,
	};

	expect(magician).toEqual(correct);
});