$('document').ready(function(){
  var colorArray = ['AliceBlue', 'AntiqueWhite', 'Aqua', 'Aquamarine', 'Blue']; // This creates our array of colors.

  // loops through all of the colors
  for (var i = 0; i < colorArray.length; i++) {
    // adding a new block
    var newColorBlock = $('<div>'); // creates an empty div
    newColorBlock.css('background-color', colorArray[i]); // adds a color to the empty div
    newColorBlock.addClass('colorBlock'); //adds a class to the empty div
    $('#colorBlockContainer').append(newColorBlock); // adds the div to the DOM
  }

  var randomNumberSelected = randomNumber(0, colorArray.length - 1); // returns random number. using colorArray.length - 1 is better than hard coding in case you would add more colors
  var randomColor = colorArray[randomNumberSelected]; // uses randomNumberSelected to pick a random color from colorArray
  $('#userColorPrompt').text(randomColor);
});

function randomNumber(min, max){
  return Math.floor(Math.random() * (1 + max - min) + min);
}
