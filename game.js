function fight(playerA, playerB) {
	console.log("The fight begins!");

	while (playerA.isAlive() && playerB.isAlive()) {
		// Determine attackers based on health
		const firstAttacker = playerA.health <= playerB.health ? playerA : playerB;
		const secondAttacker = firstAttacker === playerA ? playerB : playerA;

		// First attack
		firstAttacker.attackPlayer(secondAttacker);

		// Only the second attacker can attack if they are still alive
		if (secondAttacker.isAlive()) {
			secondAttacker.attackPlayer(firstAttacker);
		}
	}

	// Determine the winner
	const winner = playerA.isAlive() ? playerA.name : playerB.name;
	console.log(`The winner is ${winner}!`);
}

module.exports = fight;
