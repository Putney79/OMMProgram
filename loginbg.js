// Store the path of the images in an array
var backgrounds = ["bg6.png", "bg7.png", "bg8.png", "bg9.png"];
window.onload = function() {
  // Get a random index
  var index = Math.floor(Math.random() * backgrounds.length);
  // Modify the background image of the body 
  document.body.style.background = "url('" + backgrounds[index] + "')";
  // These css stylings are to make sure the image fits the page correctly
  document.body.style.backgroundSize = "cover";
  document.body.style.backgroundRepeat = "no-repeat";
};
