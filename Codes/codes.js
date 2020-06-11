// Change color for hover as an affordance to click on maps
// The second function changes the color
// back when the pointer leaves the image
$("img#Image").hover(function() {
  $(this).css("background-color", "white");
}, function() {
  $(this).css("background-color", "#0c120c");
  console.log("boi");
});
