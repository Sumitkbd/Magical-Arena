const assert = require("assert");
const Player = require("./player");
const fight = require("./game");

// Helper function to log the result of a test
function logTestResult(testName, passed) {
	if (passed) {
		console.log(`✔️  Test Passed: ${testName}`);
	} else {
		console.log(`❌  Test Failed: ${testName}`);
	}
}

// Test 1: Player Initialization
function testPlayerInitialization() {
	try {
		const player = new Player("Test Player", 50, 5, 10);
		assert.strictEqual(player.health, 50);
		assert.strictEqual(player.strength, 5);
		assert.strictEqual(player.attack, 10);
		logTestResult("Player Initialization", true);
	} catch (error) {
		logTestResult("Player Initialization", false);
		console.error(error);
	}
}

// Test 2: Fight Scenario
function testFightScenario() {
	try {
		const playerA = new Player("Player A", 50, 5, 10);
		const playerB = new Player("Player B", 100, 10, 5);

		fight(playerA, playerB);
		assert(playerA.health === 0 || playerB.health === 0);
		logTestResult("Fight Scenario", true);
	} catch (error) {
		logTestResult("Fight Scenario", false);
		console.error(error);
	}
}

console.log("Running tests...");
testPlayerInitialization();
testFightScenario();
