// model object
var model = {
  boardSize: 7,
  numShips: 3,
  shipsSunk: 0,
  shipLength: 3,
  ships: [ { locations: ["06", "16", "26"], hits: ["", "", ""] },
           { locations: ["24", "34", "44"], hits: ["", "", ""] },
           { locations: ["10", "11", "12"], hits: ["", "", ""] } ],

  fire: function(guess) {
    for (var i = 0; i < this.numShips; i++) { // loop though the ships
      var ship = this.ships[i]; // for each ship create a variable called ship
      var index = ship.locations.indexOf(guess); // if 'guess' is in the locations array then we have a match. if not, 'indexOf' will return -1
      if (index >= 0) {
        ship.hits[index] = "hit"; // mark the hits array at the same index
        view.displayHit(guess);
        view.displayMessage("HIT!!!");
        return true;

      }
    }
    view.displayMiss(guess);
    view.displayMessage("You Missed!!!");
    return false; // after looping though all the ships we return false if there are no matches to the 'guess' string
  },

  isSunk: function(ship) {
    for (var i = 0; i < this.shipLength; i++) {
      if (ship.hits[i] !== "hit") {
        return false;
      }
    }
    return true;
  }  
};

// view object
var view = {
  // displayMessage method takes an arugment which is a string 
  // and displays it in the message area
  displayMessage: function(msg) {
    var messageArea = document.getElementById("messageArea"); // get the messageArea HTML element
    messageArea.innerHTML = msg; // update the messageArea HTML element by setting it to 'msg'
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

var controller = {
  guesses: 0,

  processGuess: function(guess) {
    var location = parseGuess(guess); // validates the guess
    if (location) {
      this.guesses++; // if user enters valid guess we then increase guesses by one
      var hit = model.fire(location);
      if (hit && model.shipsSunk === model.numShips) {
        view.displayMessage("You sank all of my ships, in " + this.guesses + " guesses");
      }
    }
  }
};

// helper function

function parseGuess(guess) {

  var alphabet = ["A", "B", "C", "D", "E", "F", "G"]; // create an array of letters and assign it to the variable 'alphabet'

  if (guess === null || guess.length !== 2) { // we check for an empty string and if there is a string it is no more than two characters
    alert("please enter a letter and a number");
  } else {
    var firstChar = guess.charAt(0); // here we grab the first character of the guess string and assign it to 'firstChar'
    var row = alphabet.indexOf(firstChar); // here we grab the index number of the 'firstChar' variable
    var column = guess.charAt(1); // here we grab the second character of the guess string and assing it to 'column'
    
    if (isNaN(row) || isNaN(column)) {
      alert("Error - Enter a letter and number that is on the board. Please try again.");

    } else if (row < 0 || row >= model.boardSize || column < 0 || column >= model.boardSize) {
      alert("Error - That is off the board! Please try again.");
    
    } else {
      return row + column; // if string 'guess' passes validation then return letter (row) and number (column) and concatenate to form a single sting to two characters
    
    }
  }
  return null;
};







// model.fire("44");




controller.processGuess("A0");