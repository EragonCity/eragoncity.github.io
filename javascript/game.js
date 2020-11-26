//* sounds
var hitsound = new Audio('sounds/drum-hitnormal.wav');
var misssound = new Audio('sounds/combobreak.wav');

//*local storage
var time_get = localStorage.getItem("timeLocalStorage");
var size_get = localStorage.getItem("circle_sizeLocalStorage");
var msc_get = localStorage.getItem("mscLocalStorage");

//* string => number conversion
var time = Number(time_get);
var size = Number(size_get)/2;
var msc = Number(msc_get);
var time_set = time;

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
var comboVar = 1;
var notclick = setInterval(miss, time);
var misscount = 0;
var maxcombo = 0;

function addScore() {
    scoreVar += 100*comboVar;
    comboVar++;
    randomPos();
    hitsound.play();
    clearInterval(notclick);
    notclick = setInterval(miss, time);
};
// * miss function
function miss() {
    scoreVar -= 50;
    misssound.play();
    comboVar = 1;
    randomPos();
    misscount++;
};
// *constatant function for other calculations
setInterval (() => {
    const zeroPad = (num, places) => String(num).padStart(places, '0')
    //*score padding and display
    if (scoreVar >= 0) {
        document.getElementById("score").innerHTML = zeroPad(scoreVar, 10);
    } else if (scoreVar < 0) {
        var scoreVarAbs = Math.abs(scoreVar);
        document.getElementById("score").innerHTML = `-${zeroPad(scoreVarAbs, 10)}`;
    };
    // *combo display
    document.getElementById("combocounter").innerHTML = `x${comboVar-1}`;
    // *misscout displal
    var mis = msc - misscount;
    if (mis < 0) {
        document.getElementById("missleft").innerHTML = `Misses Left: 0`; 
    } else {
        document.getElementById("missleft").innerHTML = `Misses Left: ${mis}`; 
    };
    // *max combo counting
    if (maxcombo < comboVar) {
        maxcombo = comboVar;
    };
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

//* time counting
var totalSeconds = 0;
setInterval(setTime, 1000);
function setTime() {
    ++totalSeconds;
};
//* local storage output
setInterval (() => {
    localStorage.setItem("scoreLocalStorage", scoreVar);
    localStorage.setItem("secondsLocalStorage", totalSeconds);
    localStorage.setItem("maxcomboLocalStorage", maxcombo)
}, 0);

//* random events
var rnd = localStorage.getItem("rndEventLocalStorage");
document.getElementById("wh").innerHTML = rnd;
function rndD() {
    if (rnd === true) {
        setInterval(randomEvent,10000);
    };
};
rndD();
function randomEvent() {
    switch (Math.ceil(Math.random()*10)) {
        case 1:    
        case 2:    
        case 3:  
        case 4:
            document.getElementById("button").style.borderRadius = "0px";
            setTimeout(circle,5000);
            break;
        case 5:
        case 6:
            time = 200;
            setTimeout(time_normal, 2000);
            break;
        case 7:
        case 8:
        case 9:
        case 10:
        default:
            console.log("default");
    };
};
function circle() {
    document.getElementById("button").style.borderRadius = "500px";
};
function time_normal() {
    time = time_set;
};