//* sounds
var hitsound = new Audio('sounds/drum-hitnormal.wav');
var misssound = new Audio('sounds/combobreak.wav');

//*local storage
var time_get = localStorage.getItem("timeLocalStorage");
var size_get = localStorage.getItem("circle_sizeLocalStorage");
var msc_get = localStorage.getItem("mscLocalStorage")

//* string => number conversion
var time = Number(time_get);
var size = Number(size_get)/2;
var msc = Number(msc_get);

//*debug
//!document.getElementById("debug").innerHTML = `${time}ms<br>${size}px`;

//! back button
function menu () {
    document.location.href = "index.html";
};

//* size apply
document.getElementById("button").style.padding = size + "px";

setInterval (() => {
    var wWcalculation = window.innerWidth - 150;
    var wHcalculation = window.innerHeight - 150;
    document.getElementById('playarea').style.width = `${wWcalculation}px`;
    document.getElementById('playarea').style.height = `${wHcalculation}px`;
    document.getElementById('missarea').style.width = `${wWcalculation}px`;
    document.getElementById('missarea').style.height = `${wHcalculation}px`;
    document.getElementById('button').style.borderWidth = `${size/5}px`;
    //*debug
    //!document.getElementById('wh').innerHTML = `Debug<br>Width: ${window.innerWidth}<br>Height: ${window.innerHeight}`;
}, 0);

//* position randomizer
// ! window.onload = pos;
var randomPosition = setInterval(randomPos, time);
function randomPos() {
    var w = document.getElementById('playarea').offsetWidth;
    var h = document.getElementById('playarea').offsetHeight;
    var g = Math.floor(Math.random() * (w - size + 1)) + size;
    var j = Math.floor(Math.random() * (h - size + 1)) + size;
    document.getElementById('position').style.left = `${g}px`;
    document.getElementById('position').style.top = `${j}px`;
    clearInterval(randomPosition);
    randomPosition = setInterval(randomPos, time);
    //* debug
    //! document.getElementById('wh').innerHTML = `Debug<br>X: ${g}<br>Y: ${j}`;
};

//*score counting
var scoreVar = 0;
var comboVar = 0;
var notclick = setInterval(miss, time);
var misscount = 0;
function addScore() {
    scoreVar += 100*comboVar;
    comboVar++;
    randomPos();
    hitsound.play();
    clearInterval(notclick);
    notclick = setInterval(miss, time);
};
function miss() {
    scoreVar -= 50;
    misssound.play();
    comboVar = 0;
    misscount++;
};
setInterval (() => {
    const zeroPad = (num, places) => String(num).padStart(places, '0')
    if (scoreVar >= 0) {
        document.getElementById("score").innerHTML = zeroPad(scoreVar, 10);
    } else if (scoreVar < 0) {
        var scoreVarAbs = Math.abs(scoreVar);
        document.getElementById("score").innerHTML = `-${zeroPad(scoreVarAbs, 10)}`;
    };
    document.getElementById("combocounter").innerHTML = `x${comboVar}`
    document.getElementById("missleft").innerHTML = `Left Misses: ${msc-misscount}`
}, 0);

//* game over
function gameOver() {
    document.location.href = "gameover.html";
};

setInterval (() => {
    if (misscount > msc) {
        gameOver();
    };
},0);

//* score and time output
var totalSeconds = 0;
setInterval(setTime, 1000);

function setTime() {
    ++totalSeconds;
};
//* local storage output
setInterval (() => {
    localStorage.setItem("scoreLocalStorage", scoreVar);
    localStorage.setItem("secondsLocalStorage", totalSeconds);
}, 0);