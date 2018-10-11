var won = 0;
var lost = 0;
var attempts = 10;
var usedArray = [];
var ranLetter = ranLetter;
var letters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]
ranLetter = letters[Math.floor(Math.random() * letters.length)];
console.log(ranLetter);

function jsGuess() {
      ranLetter = letters[Math.floor(Math.random() * letters.length)];
      console.log(ranLetter);

}

document.onkeyup = function (event) {
      var playerGuess = event.key;

      if (playerGuess === ranLetter) {
            won++;
            attempts = 10;
            usedArray = [];

    }

      jsGuess();
      if (playerGuess !== ranLetter) {
            attempts--;
        
    }
      
      if (attempts == 0) {
            lost++;
            usedArray = []
            attempts = 10;
    }

      if (usedArray.indexOf(playerGuess) >= 0) {

    } else {
            
            usedArray.push(playerGuess);
            document.getElementById('playerGuess').innerHTML = usedArray;
            console.log(usedArray);

    }
      document.getElementById('won').innerHTML = won;
      document.getElementById('lost').innerHTML = lost;
      document.getElementById('attempts').innerHTML = attempts;

}

