import Bowerman from '../Classes/Bowerman.js';

test('Правильно создаётся класс', () => {
	const bowman = new Bowerman('Azazel');
	const correct = {
		name: 'Azazel',
		type: 'Bowman',
		health: 100,
		level: 1,
		attack: 25,
		defence: 25,
	};

	expect(bowman).toEqual(correct);
});