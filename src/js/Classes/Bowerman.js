import Character from './Character.js';

class Bowerman extends Character{
	constructor(name){
		super(name, 'Bowman');
		this.attack = 25;
		this.defence = 25;
	}
}

export default Bowerman;
