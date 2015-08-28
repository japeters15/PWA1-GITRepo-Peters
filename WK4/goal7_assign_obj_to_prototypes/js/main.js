/**
 * Created by the JavaScript Development Team
 * Class: PWA
 * Goal: Goal7
 * Janay Peters
 */

//Create an array called "Names" will contains at 5 names:
// Janay
// Danielle
// Chare
// Nina
// Jude
// Will be randomly selected in the output display.



//Create a "FOR loop" and place each reference of the object in an array called "People".

//randomly chose a name (using the Math.random() method)
// the names array is sent to the constructor of the person along with what row number in the HTML the information will be displayed in.
        Ex: var person = new Person(names[someName],someRow);



//Create a function called "populateHTML" (outputs the person's name and person's job, on the web page.)
//NOT allow duplicate names to appear.!!!

//Set up an Interval that calls a runUpdate() function 30 times a second.
    Example: "setInterval(runUpdate, 1000 / 30);"
//Passing two arguments


//allow program to loop through each person and run the prototype update() function.
//should execute in the runUpdate() function that is called from the setInterval
// For example:
    function runUpdate(){
        people.forEach(function(element){

            element.update();

        });