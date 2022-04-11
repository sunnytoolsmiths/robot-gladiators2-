// this creates a function named fight

var playerName = window.prompt ("what is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;


var enemyNames = ["Roborto", "Amy Android", "Robo Trumble"];
var enemyHealth = 50;
var enemyAttack = 12; 

var fight = function(enemyName){

    while (playerHealth > 0 && enemyHealth > 0) {
        var promptFight = window.prompt ("Would you like to FIGHT or SKIP");

        if (promptFight === "skip" || promptFight === "SKIP") {
            var confirmSkip = window.confirm("Are you sure you would like to quit?");

            if(confirmSkip) {
                window.alert(playerName + " has decided to skip");
                playerMoney = Math.max(0, playerMoney - 10);
                console.log("player money", playerMoney);
                break;
            }
        }
    var damage = randomNumber (playerAttack - 3, playerAttack);
    enemyHealth = Math.max(0, enemyHealth - damage);
    console.log(playerName + " attacked" + enemyName + " ." + enemyName +  "now has" + enemyHealth + "health remaining.");

    if (enemyHealth <= 0) {
        window.alert(enemyName + "has died!");
        playerMoney = playerMoney + 20; 
        break;
    } else {
        window.alert(enemyName + "still has" + enemyHealth + "left.");

    var damage = randomNumber(enemyAttack -3 , enemyAttack);
    playerHealth = Math.max(0, playerHealth - damage);
    console.log (enemyName + "attached" + playerName + "." + playerName + "has " + playerHealth + "left.");
    
    if (playerHealth <= 0) {
        window.alert(playerName + " has died!");
        break;
    } else {
        window.alert (playerName + " still has" + playerHealth + "left.");
        }
    }
    }

}

var startGame =function () {
    var playerHealth = 100;
    var playerAttack = 10;
    var playerMoney = 10;

    for (var i = 0; i < enemyNames.length; i++) {
        if (playerHealth > 0){
            window.alert ("Welcome to Robot Gladiators! Round" + (i + 1));
        
            var pickedEnemyName = enemyNames[i];
            enemyHealth = randomNumber(40, 60);
        
            fight(pickedEnemyName);

            if (playerHealth > 0 && i < enemyNames.length - 1){
                var storeConfirm = window.confirm("The fight is over, visit the store before the next round.");
                if(storeConfirm) {
                shop();}
            }
        }
        else {
            window.alert("You have lost your robot in battle! Game Over!");
            break;
        }
    }
    endGame();
};


var endGame = function() {
    window.alert("The game has ended. Let's see how you did!");

    if (playerHealth > 0){
        window.alert("Great job!")}
        else {
            window.alert("you have lost the battle");
        }
    var playAgainConfirm = window.confirm("Would you like to play again?");
    if(playAgainConfirm) {
      startGame();
    }
    else {
        window.alert("Thank you for playing the game");
    }
};

    var shop =function(){
        var shopOptionPrompt = window.prompt(
            "Would you like to REFILL your health, UPGRADE your attach, or LEAVE the store?"
        );
        switch (shopOptionPrompt) {
            case "refill":
            case "REFILL":
                if(playerMoney >= 7){
                window.alert("Refilling player's health by 20 for 7 dollars.");
                playerHealth = playerHealth + 20;
                playerMoney = playerMoney - 7;
                }
                else {
                    window.alert("You do not have enough money!");
                }

                break;
            
            case "upgrade": 
            case "UPGRADE":
            if (playerMoney >= 7){
            window.alert("Upgrading player's attack by 6 for 7 dollars.");
            playerHealth = playerHealth + 20;
                playerMoney = playerMoney - 7;}
                else {
                    window.alert("You do not have enough money!");
                }
                break;
            
            case "leave": 
            window.alert("Leaving the store.");
            break;

            default: 
            window.alert ("You did not pick a valid option. Try again.");
            shop();
            break;
        }
    };


var randomNumber = function (min, max){
    var value = Math.floor(math.random()*  (max - min + 1) + min);

    return value;
};

