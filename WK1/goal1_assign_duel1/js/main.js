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
        winnerCheck()
    };

    function winnerCheck(){
        //code will go here
    };

    /*******The program begins******/
    console.log('program starts')
    fight();

})();
