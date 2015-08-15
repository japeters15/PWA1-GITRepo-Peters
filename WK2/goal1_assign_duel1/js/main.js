/*
 Janay Peters
 8/7/15
 Goal1: Assignment Duel1
 */

/*PseudoCode
1. Create variables for both players
2. Start both players with 100 point
3. Create fight & winnerCheck functions
4. if fight passes 10 rounds add break command
5. Display winner or no winner


 */
// self-executing function
(function(){

    console.log("FIGHT!!");

    //player name, damage, health
    var playerOne = "Spiderman",20,100;
    var playerTwo = "Batman",20,100;

    var round = 0;

    function fight(){
        console.log('in the fight function');

        alert(playerOne[0]+":"+playerOne[2]+"START"+playerTwo[0]+":"+playerTwo[2]);

        for(var i=0;i<10; i++){

            //ramdom formula is - Math.floor(Math.random()*(max-min)+min);

            var minDamage1 = playerOne[1] * 0.5;
            var minDamage2 = playerTwo[1] * 0.5;
            var f1 = Math.floor(Math.random()*(playerOne[1]-minDamage1)+minDamage1);
            var f2 = Math.floor(Math.random()*(playerTwo[1]-minDamage2)+minDamage2);

            //inflict damage
            playerOne[2]-=f1;
            playerTwo[2]-=f2;

            console.log(playerOne[0]+":"+playerOne[2]+""+playerTwo[0]+":"+playerTwo[2]);

            var results = winnerCheck();
            console.log(results);

            if(results === "no winner"){
                round++;
                alert(playerOne[0]+":"+playerOne[2]+"ROUND"+round+"OVER"+playerTwo[0]+":"+playerTwo[2]);

            }else{
                alert(results);
                break;
            }


        }
    }

    function winnerCheck(){
        console.log("in winnerCheck FN");

        var result="no winner";

        if(playerOne[2]<1&&playerTwo[2]<1) {
            result = "you both die";
        } else if(playerOne[2]<1){
            result = playerTwo[0]+"WINS!!!";
        } else if(playerTwo[2]<1){
            result = playerOne[0]+"WINS!!!";
        }

        return result;
    }

    /*******The program begins******/
    console.log('program starts');
    fight();

})();

