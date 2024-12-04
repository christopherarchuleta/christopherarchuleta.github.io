// Once page and elements load
window.onload = function() {

  // Change color for hover as an affordance to click on maps
  // The second function changes the color
  // back when the pointer leaves the image
  $("img#Image").hover(function() {
    $(this).css("background-color", "#00884b");
  }, function() {
    $(this).css("background-color", "#0c2c1e");
  });


};
