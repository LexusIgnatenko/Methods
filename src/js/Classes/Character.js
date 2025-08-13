class Character {
	constructor(name, type) {
		if (typeof name !== 'string' || name.length < 2 || name.length > 10) {
			throw new Error("Имя должно быть строкой от 2 до 10 символов.");
		}

		const types = ['Bowman', 'Swordsman', 'Magician', 'Daemon', 'Undead', 'Zombie'];
		if (!types.includes(type)) {
			throw new Error(`Тип должен быть один из: ${types.join(', ')}`);
		}

		this.name = name;
		this.type = type;
		this.health = 100;
		this.level = 1;
		this.attack = undefined;
		this.defence = undefined;
	}
	levelUp(){
  		if (this.health === 0) {
    		throw new Error("Нельзя повысить левел умершего");
    	}

  		this.health = 100;
		this.level += 1;
		this.attack *= 1.2;
		this.defence *= 1.2;
	}
	damage(points) {
  		if (this.health === 0) {
  			return;
    	}
    	const damageReceived = points * (1 - this.defence / 100);
  		this.health -= damageReceived;
  		if (this.health < 0) {
  			this.health = 0;
    	}
    }
};

export default Character;
