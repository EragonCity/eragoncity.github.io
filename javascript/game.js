//*local storage
var time_get = localStorage.getItem("timeLocalStorage");
var size_get = localStorage.getItem("circle_sizeLocalStorage");

//* string => number conversion
var time = Number(time_get);
var size = Number(size_get)/2;

//*debug
//!document.getElementById("debug").innerHTML = `${time}ms<br>${size}px`;

//! back button
function menu () {
    document.location.href = "index.html";
};

//* size apply
document.getElementById("button").style.padding = size + "px";

setInterval (() => {
    document.getElementById('playarea').style.width = `${window.innerWidth - 150}px`;
    document.getElementById('playarea').style.height = `${window.innerHeight - 150}px`;
    document.getElementById('button').style.borderWidth = `${size/5}px`
    //*debug
    //!document.getElementById('wh').innerHTML = `Debug<br>Width: ${window.innerWidth}<br>Height: ${window.innerHeight}`;
}, 0);

//* position randomizer
window.onload = pos;
setInterval (() => {
    var w = document.getElementById('playarea').offsetWidth;
    var h = document.getElementById('playarea').offsetHeight;
    var g = Math.floor(Math.random() * (w - size + 1)) + size;
    var j = Math.floor(Math.random() * (h - size + 1)) + size;
    document.getElementById('position').style.left = `${g}px`;
    document.getElementById('position').style.top = `${j}px`;
    //* debug
    //! document.getElementById('wh').innerHTML = `Debug<br>X: ${g}<br>Y: ${j}`;
}, time);

//*score counting
var score = 0;
function click () {
    score += 100;
    const zeroPad = (num, places) => String(num).padStart(places, '0')
    document.getElementById("score").innerHTML = zeroPad(score, 10);
};