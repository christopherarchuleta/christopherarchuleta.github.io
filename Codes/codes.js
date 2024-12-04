// Change color for hover as an affordance to click on maps
// The second function changes the color
// back when the pointer leaves the image
$("img#Image").hover(function() {
  $(this).css("background-color", "#00884b");
}, function() {
  $(this).css("background-color", "#0c2c1e");
});


// Responsive class in topnav makes menu vertically oriented
// Function below activated the responsive class
// Expand menu upon icon click
document.getElementById("icon").onclick = function()
{verticalMenu()};
function verticalMenu() {
  var vertBar = document.getElementById("NavbarMobile");
  if (vertBar.classList.contains('topnav')) {
    vertBar.classList.add('responsive')
  } else {
    vertBar.classList.remove('responsive')
  };

  if vertBar.classList.contains('responsive') {
    console.log('responsive')
  } else {
    ('no')
  }
};
