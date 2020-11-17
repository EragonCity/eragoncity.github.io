// * Rozmiar Kółka
var circle_size = document.getElementById("circle_size");
var circle_size_output = document.getElementById("size");
circle_size_output.innerHTML = circle_size.value + "px";

circle_size.oninput = function() {
  circle_size_output.innerHTML = this.value + "px";
};

// * Czas na kliknięcie
var time = document.getElementById("time");
var time_output = document.getElementById("timeout");
time_output.innerHTML = time.value + "s";

time.oninput = function() {
    time_output.innerHTML = this.value + "s";
};

// * chowanie loga
setTimeout(function(){
  document.getElementById('bg').style.opacity = 0;
  document.getElementById('bg').style.visibility = "hidden";
  document.getElementById('menu').style.opacity = 1.0;
},5000);

function startGame() {
  location.href("game.html")
};