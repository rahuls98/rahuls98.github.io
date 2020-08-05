var img = new Image();
img.onload = function() {
    document.querySelector("#loader").style.display = "none";
    document.querySelector("body").style.visibility = "visible";
};
img.src = "./assets/images/Avatar.png";

var sidenav_toggle = document.getElementById("sidenav_toggle");
var sidenav_close = document.getElementById("sidenav_close");
var sidenav = document.getElementById("sidenav");
let sidenav_item = document.getElementsByClassName('sidenav_item')

sidenav_toggle.addEventListener('click', () => {
    sidenav.style.width = '60vw';
    sidenav.style.transition = '0.5s';
    document.getElementById('main-content').style.opacity = '0.5';
    document.getElementById('main-content').style.transition = '0.8s';
    for(let key in sidenav_item) sidenav_item[key].style.display = 'block'
});
sidenav_close.addEventListener('click', () => {
    sidenav.style.width = '0vw';
    sidenav.style.transition = '0.5s';
    document.getElementById('main-content').style.opacity = '1';
    document.getElementById('main-content').style.transition = '0.8s';
    for(let key in sidenav_item) sidenav_item[key].style.display = 'none'
});