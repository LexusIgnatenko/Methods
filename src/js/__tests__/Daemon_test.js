import Daemon from '../Classes/Daemon.js';

test('Правильно создаётся класс', () => {
	const daemon = new Daemon('Asta');
	const correct = {
		name: 'Asta',
		type: 'Daemon',
		health: 100,
		level: 1,
		attack: 10,
		defence: 40,
	};

	expect(daemon).toEqual(correct);
});