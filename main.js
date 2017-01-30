
function clearAll() {
  "document.getElementByClass('land-output-img').style.display='none'";
	"document.getElementByClass('land-title').style.display='none'";
}

function selectFamily() {
  var image = document.getElementById('default-last');
  image.src = "h-family-needs.jpg"
  document.getElementById('default-title').innerHTML = 'Need to handle a Family Emergency?';
}

function selectHome() {
  var image = document.getElementById('default-last');
  image.src = "home-repair.jpg"
  document.getElementById('default-title').innerHTML = 'Unexpected Home Maintenance bill?';
}
function selectCar() {
  var image = document.getElementById('default-last');
  image.src = "car-repair.jpg"
  document.getElementById('default-title').innerHTML = 'Can you handle that Car Repair?';
}
function selectGrocery() {
  var image = document.getElementById('default-last');
  image.src = "grocery-shopping.jpg"
  document.getElementById('default-title').innerHTML = 'Too many Groceries?';
}
function selectMedical() {
  var image = document.getElementById('default-last');
  image.src = "medical-emergency.jpg"
  document.getElementById('default-title').innerHTML = 'Surprise Medical Emergency?';
}
function selectUtility() {
  var image = document.getElementById('default-last');
  image.src = "utilities.jpg"
  document.getElementById('default-title').innerHTML = 'Need help with the Utilities?';
}
function selectDefault() {
  var image = document.getElementById('default-last');
  image.src = "default.jpg"
  document.getElementById('default-title').innerHTML = 'Take a Survey to Win!';
}

$(document).ready(main);
