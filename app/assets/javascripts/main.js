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


