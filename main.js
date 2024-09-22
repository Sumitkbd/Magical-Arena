const Player = require("./player");
const fight = require("./game");

const playerA = new Player("Player A", 50, 5, 10);
const playerB = new Player("Player B", 100, 10, 5);

fight(playerA, playerB);
