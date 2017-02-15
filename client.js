var colorArray = ['AliceBlue', 'AntiqueWhite', 'Aqua', 'Aquamarine', 'Blue', 'red', 'pink']; // This creates our array of colors. Generally, it's a good idea to put variables at the top of the code block.
var randomColor = ''; // initializing an empty string is a good idea, because this variable will be a string going forward

var numberOfColors = 3;

$('document').ready(function(){
  addBlocksToPage();

  $('#colorBlockContainer').on('click', '.colorBlock', function(){ // event listener to listen for clicks on the divs
    // console.log('$(this).data().colorOfBlock : ', $(this).data().colorOfBlock);
    var colorOfBlockSelected = $(this).data().colorOfBlock;
    if(randomColor == colorOfBlockSelected){
      $('#responseSection').text('You got it!');
      chooseNewRandomColor(); // this will call the function to print out a new random color to choose if the user gets the color correct
    }else {
      $('#responseSection').text('That is not right');
    }
  });

  $('#addColorButton').on('click', function(){
    numberOfColors++;
    addBlocksToPage();
  });

  $('#removeColorButton').on('click', function(){
    numberOfColors--;
    addBlocksToPage();
  });

});

function randomNumber(min, max){
  return Math.floor(Math.random() * (1 + max - min) + min);
}

function chooseNewRandomColor() {
  var randomNumberSelected = randomNumber(0, numberOfColors - 1); // returns random number. using colorArray.length - 1 is better than hard coding in case you would add more colors
  randomColor = colorArray[randomNumberSelected]; // uses randomNumberSelected to pick a random color from colorArray
  $('#userColorPrompt').text(randomColor);
}

function addBlocksToPage(){
  $('#colorBlockContainer').empty(); // clears all blocks before adding new ones
  // loops through all of the colors
  for (var i = 0; i < numberOfColors; i++) {
    // adding a new block
    var newColorBlock = $('<div>'); // creates an empty div
    newColorBlock.css('background-color', colorArray[i]); // adds a color to the empty div
    newColorBlock.addClass('colorBlock'); //adds a class to the empty div
    newColorBlock.data('colorOfBlock', colorArray[i]);
    $('#colorBlockContainer').append(newColorBlock); // adds the div to the DOM
  }
  chooseNewRandomColor();
}
