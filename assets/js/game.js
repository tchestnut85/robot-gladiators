window.alert("Welcome to Robot Gladiators!");

var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;

var enemyNames = ["Roborto", "Amy Android", "Robo Trumble"];
var enemyHealth = 50;
var enemyAttack = 12;

// function to start a new game
var startGame = function () {
  // reset player stats
  playerHealth = 100;
  playerAttack = 10;
  playerMoney = 10;

  // fight each enemy robot by looping over them and fighting them one at a time
  for (var i = 0; i < enemyNames.length; i++) {
    if (playerHealth > 0) {
      window.alert("Welcome to Robot Gladtiators! Round " + (i + 1));
      var pickedEnemyName = enemyNames[i];
      enemyHealth = 50;
      fight(pickedEnemyName);
    }
    // if player is not alive, break out of lop and let endGame function run
    else {
    break;
  }
}

// after the loops ends, player is either out of health or enemies to fight, so run endGame function
endGame();
};

// function to end the entire game
var endGame = function () {
  window.alert("The game has now ended. Let's see how you did!");

  // if player is still alive, player wins!
  if (playerHealth > 0) {
    window.alert("Great job, you've survived the game! You now have a score of " + playerMoney + ".");
  } else {
    window.alert("You've lost your robot in battle!");
  }

  // ask player if they'd like to play again
  var playAgainConfirm = window.confirm("Would you like to play again?");

  if (playAgainConfirm) {
  // restart the game
  startGame();
  } else {
  window.alert("Thank you for playing Robot Gladiators! Come back soon!");
  }
};

// fight function
var fight = function (enemyName) {
  while (playerHealth > 0 && enemyHealth > 0) {

    var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose.");

    if (promptFight === "skip" || promptFight = "SKIP") {
      //confirm user wants to skip
      window.alert(playerName + " has decided to skip this fight. Goodbye!");
      subtract money from playeMoney for skipping
      playerMoney = playerMoney - 10;
      shop();
      break;
    }
  }

  // remove enemy's health by subtracting the amount set in the playerAttack variable
  enemyHealth = enemyHealth - playerAttack;
  console.log(
    playerName + ' attacked ' + enemyName + '. ' + enemyName + ' now has ' + enemyHealth + ' health remaining.'
  );

  // check enemy's health
  if (enemyHealth <= 0) {
    window.alert(enemyName + ' has died!');

    // award player money for winning
    playerMoney = playerMoney + 20;

    // ask user if they want to use the store before next round
    var storeConfirm = window.confirm("The fight is over, visit the store before the next round?");

    // if yes, take user to the shop() function
    if (storeConfirm) {
      shop();
    }

    // leave while() loop since enemy is dead
    break;
  } else {
    window.alert(enemyName + ' still has ' + enemyHealth + ' health left.');
  }

  // remove players's health by subtracting the amount set in the enemyAttack variable
  playerHealth = playerHealth - enemyAttack;
  console.log(
    enemyName + ' attacked ' + playerName + '. ' + playerName + ' now has ' + playerHealth + ' health remaining.'
  );

  // check player's health
  if (playerHealth <= 0) {
    window.alert(playerName + ' has died!');
    // leave while() loop if player is dead
    break;
  } else {
    window.alert(playerName + ' still has ' + playerHealth + ' health left.');
  }
}
};

// go to shop between battles function
var shop = function() {
  //ask player what to do
  var shopOptionPrompt = window.prompt(
    "Would you like to REFILL your health, UPGRADE your attack. or LEAVE the store? Please enter one 'REFILLE', 'UPGRADE', or 'LEAVE' to make a choice."
  );

  //use switch case to carry out action
  switch (shopOptionPrompt) {
    case "refill":
    case "REFILL":
      window.alert("Refilling player's health by 20 for 7 dollars.");
      playerHealth += 20;
      playerMoney -= 7;
      break;
    case "upgrade":
    case "UPGRADE":
      window.alert("Upgrading player's attack by 6 for 7 dollars.");
      playerAttack += 6;
      playerMoney -= 7;
      break;
  }
};

// start first game when page loads
startGame();


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

  var fight = function (enemyName) {
    while (playerHealth > 0 && enemyHealth > 0) {
      // ask user if they'd liked to fight or run
      var promptFight = window.prompt('Would you like FIGHT or SKIP this battle? Enter "FIGHT" or "SKIP" to choose.');

      if (promptFight === "fight" || promtFight === "FIGHT") {
        fight();
      } else {
        windows.alert("You must enter a correct response!")
      }

      // if user picks "skip" confirm and then stop the loop
      if (promptFight === "skip" || promptFight === "SKIP") {
        // confirm user wants to skip
        var confirmSkip = window.confirm("Are you sure you'd like to quit?");

        // if yes (true), leave fight
        if (confirmSkip) {
          window.alert(playerName + ' has decided to skip this fight. Goodbye!');
          // subtract money from playerMoney for skipping
          playerMoney = playerMoney - 10;
          console.log("playerMoney", playerMoney)
          break;
        }
      }






