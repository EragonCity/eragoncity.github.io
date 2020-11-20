var time = localStorage.getItem("timeLocalStorage")
var size = localStorage.getItem("circle_sizeLocalStorage")
document.getElementById("debug").innerHTML = time + '<br>' + size;
function menu () {
    document.location.href = "index.html";
};

document.getElementById("button").style.padding= size;

setInterval (function () {
    
}, 1000);