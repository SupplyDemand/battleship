// View Object

var view = {
  // displayMessage method takes an arugment which is a string 
  // and displays it in the message area
  displayMessage: function(msg) {
    var messageArea = document.getElementById("messageArea"); // get the messageArea element
    messageArea.innerHTML = msg; // update the messageArea element by setting it to 'msg'
  },
  
  displayHit: function(location) {
    var cell = document.getElementById(location); // get the id of the passed in string (location)
    cell.setAttribute("class", "hit"); // sets the class of this element to 'hit'
  },

  displayMiss: function(location) {
    var cell = document.getElementById(location); // get the id of the passed in string (location)
    cell.setAttribute("class", "miss"); // sets the class of this element to 'hit'
  }
};



function parseGuess(guess) {

  var alphabet = ["A", "B", "C", "D", "E", "F", "G"]; // create an array of letters

  if (guess === null || (guess.length !== 2) { // we check for an empty string and if there is a string it is no more than two characters
    alert("please enter a letter and a number");
  } else {
    var firstChar = guess.CharAt(0); // here we grab the first character of the guess string and assign it to 'firstChar'
    var row = alphabet.indexOf(firstChar) // here grab the index number of the 'firstChar' variable
  }
}





