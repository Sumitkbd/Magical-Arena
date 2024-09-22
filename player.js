class Player {
	constructor(name, health, strength, attack) {
		this.name = name;
		this.health = health;
		this.strength = strength;
		this.attack = attack;
	}

	rollDice() {
		return Math.floor(Math.random() * 6) + 1; // Random number between 1 and 6
	}

	attackPlayer(defender) {
		const attackRoll = this.rollDice();
		const defendRoll = defender.rollDice();
		const damageDealt = this.attack * attackRoll - defender.strength * defendRoll;

		console.log(`${this.name} attacks! Attack Roll: ${attackRoll}, Defend Roll: ${defendRoll}`);

		// Ensure damage is non-negative
		const actualDamage = Math.max(0, damageDealt);
		console.log(`${this.name} deals ${actualDamage} damage to ${defender.name}`);

		if (actualDamage > 0) {
			defender.reduceHealth(actualDamage);
		}
	}

	reduceHealth(damage) {
		this.health = Math.max(0, this.health - damage);
		console.log(`${this.name}'s health is now ${this.health}`);
	}

	isAlive() {
		return this.health > 0;
	}
}

module.exports = Player;
