/*
 Janay Peters
 8/7/15
 Goal1: Assignment Duel1
 */

// self-executing function
(function(){

    console.log("FIGHT!!");

    //player name
    var playerOneName = "Spiderman";
    var playerTwoName = "Batman";

    //player damage
    var player1Damage = 20;
    var player2Damage = 20;

    //player health
    var playerOneHealth = 100;
    var playerTwoHealth = 100;

    var round = 1;

    function fight(){
        console.log('in the fight function')

        alert(playerOneName+":"+playerOneHealth+"START"+playerTwoName+":"+playerTwoHealth);

        for(var i=0;i<10; i++){

            var minDamage1 = player1Damage * .5;
            var minDamage2 = player2Damage * .5;
            var f1 = Math.floor(Math.random()*(player1Damage-minDamage1)+minDamage1);
            var f2 = Math.floor(Math.random()*(player2Damage-minDamage2)+minDamage2);

            //inflict damage
            playerOneHealth-=f1;
            playerTwoHealth-=f2;

            console.log(playerOneHealth);
            console.log(playerTwoHealth);
        }
    };

    function winnerCheck(){
        //code will go here
    };

    /*******The program begins******/
    console.log('program starts')
    fight();

})();
