// Game States
// "WIN" - Player robot has defeated all enemy robots
//      * Fight all enemy robors
//      * Defeat each enemy robot
// "LOSE" - Player robots health is zero or less

var playerName = window.prompt("What is your robot's  name?")
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;

var enemyNames = ["KillRoy", "Roborto", "Amy Android"];
var enemyHealth = 50;
var enemyAttack = 12;

for(var i=0; i<enemyNames.length; i++) {
    console.log(enemyNames[i]);
    console.log(i);
    console.log(enemyNames[i] + " is at " + i + " index")
}

window.alert("Welcome to Robot Gladiators");

// loop through enemy robots
for(var i = 0; i < enemyNames.length; i++) {
    var pickedEnemyName = enemyNames[i];
    enemyHealth = 50;
    fight(pickedEnemyName[i]);
}

// FIGHT FUNCTION
var fight = function(enemyName) {
    while(enemyHealth > 0) {
        // Alert users that they are starting the round
        var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose.");
        //if player choses to fight, then fight
        if (promptFight === "fight" || promptFight === "FIGHT") {
            //remove enemy's health by subtracting the amount set in the player variable
            // Subtract the value of 'playerAttack' from the value of 'enemyHealth'
            enemyHealth = enemyHealth - playerAttack;
            // Log a resulting message to the console so we know that it worked.
            console.log(
                playerName + " attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + " health remaining."
            );
            // Check enemy's health
            if (enemyHealth <= 0) {
                window.alert(enemyName + " has died!");
            }
            else {
                window.alert(enemyName + " still has " + enemyHealth + " health left.")
            }
            // Subtract the value of 'enemyAttack' from the value of 'playerHealth'.
            playerHealth = playerHealth - enemyAttack
            // Log resulting message to the console so we know that it worked.
            console.log(
                enemyName + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining."
            );
            // check player's health
            if (playerHealth <= 0) {
                window.alert(playerName + " has died!");
            }
            else {
                window.alert(playerName + " still has " + playerHealth + " health left.")
            }
        } else if (promptFight === "skip" || promptFight === "SKIP") {
            //confirm user wants to skip
            var confirmSkip = window.confirm("Are you sure you'd like to quit?");

            // if yes (true), leave fight
            if (confirmSkip) {
                window.alert(playerName + " has decided to skip this fight. Goodbye!")
                // subtract money from 'playerMoney for skipping
                playerMoney = playerMoney - 2;
            }
            else {
                fight();
            }
        } else {
            window.alert("You need to pick a valid option. Try again!");
        }
    }
}

