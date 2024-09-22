# Magical Arena

player.js          // Contains the Player class definition
game.js            // Contains the fight logic between two players
main.js            // Contains the main file to initialize players and start the fight.
test.js            // Contains  the unit tests to ensure everything works as expected
README.md          // Instructions on running the project


## Description
This project implements a simple magical arena where two players fight until one player's health reaches zero. Each player takes turns to attack and defend, and the game simulates the outcome based on dice rolls.

## How to Run

1. Clone the repository.
2. Run `node main.js` to start the game.
3. Run tests with `node test.js` to verify functionality.

## Design
- **Player**: Represents a player in the arena. Attributes include health, strength, and attack.
- **Fight Logic**: The game continues until one player's health reaches zero.

## Unit Tests
- Tests cover player creation and a basic fight scenario.

### Step 4: Frequent Commits

```bash
git init
git add .
git commit -m "first commit"
git commit -m "Initial commit: Set up project structure"
git commit -m "Add Player class and fight logic"
git commit -m "Implement unit tests for Player class"
git commit -m "Update README with instructions"
git branch -M main
git remote add origin https://github.com/Sumitkbd/Magical-Arena.git
git push -u origin main






