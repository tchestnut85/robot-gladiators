window.alert("Welcome to Robot Gladiators!");

var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;

var enemyNames = ["Roborto", "Amy Android", "Robo Trumble"];
var enemyHealth = 50;
var enemyAttack = 12;

var fight = function(enemyNames) {
    while(enemyHealth > 0) {

    var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose.");

            if (promptFight === "fight" || promptFight === "FIGHT") {

                enemyHealth = enemyHealth - playerAttack;

                console.log(
                    playerName + " attacked " + enemyNames + ". " + enemyNames + " now has " + enemyHealth + " health remaining."
                );

                if (enemyHealth <= 0) {
                    window.alert(enemyNames + " has died!");
                }
                else {
                    window.alert(enemyNames + " still has " + enemyHealth + " health left.");
                }

                playerHealth = playerHealth - enemyAttack;

                console.log(
                    enemyNames + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining.");
                
                if (playerHealth <= 0) {
                    window.alert(playerName + " has died!");
                } else {
                    window.alert(playerName + " still has " + playerHealth + " health left.");
                }
            
            } else if (promptFight === "skip" || promptFight === "SKIP") {
                var confirmSkip = window.confirm("Are you sure you'd like to quit?");
                if (confirmSkip) {
                    window.alert(playerName + " has decided to skip this fight. Goodbye!");
                    playerMoney = playerMoney - 2;
                }
                else {
                }
            } else {
                window.alert("You need to pick a valid option. Try again!");
            }
        }
    };

for(var i = 0; i < enemyNames.length; i++) {
    var pickedEnemyName = enemyNames[i];
    enemyHealth = 50;
    fight(pickedEnemyName);
}

// fight();