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
    //*debug
    //!document.getElementById('wh').innerHTML = `Debug<br>Width: ${window.innerWidth}<br>Height: ${window.innerHeight}`;
  }, 0);