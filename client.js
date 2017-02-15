$('document').ready(function(){
  var colorArray = ['AliceBlue', 'AntiqueWhite', 'Aqua', 'Aquamarine', 'blue']; // This creates our array of colors.

  // loops through all of the colors
  for (var i = 0; i < colorArray.length; i++) {
    colorArray[i]
    // adding a new block
    var newColorBlock = $('<div>'); // creates an empty div
    newColorBlock.css('background-color', colorArray[i]); // adds a color to the empty div
    newColorBlock.addClass('colorBlock'); //adds a class to the empty div
    $('#colorBlockContainer').append(newColorBlock);

  }

  // adds the div to the DOM

});
