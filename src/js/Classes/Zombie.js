import Character from './Character.js';

class Zombie extends Character{
	constructor(name){
		super(name, 'Zombie');
		this.attack = 40;
		this.defence = 10;
	}
}

export default Zombie;
