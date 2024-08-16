let menu = document.getElementById("menu");
let showMenu = document.getElementById("show-menu");
let closeMenu = document.getElementById("close-menu");

showMenu.onclick = function () {

    menu.style.right = "0";

}

closeMenu.onclick = function () {

    menu.style.right = "-100%";

}