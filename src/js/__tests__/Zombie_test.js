import Zombie from '../Classes/Zombie.js';

test('Правильно создаётся класс', () => {
	const zombie = new Zombie('Nero');
	const correct = {
		name: 'Nero',
		type: 'Zombie',
		health: 100,
		level: 1,
		attack: 40,
		defence: 10,
	};

	expect(zombie).toEqual(correct);
});