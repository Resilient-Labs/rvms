/**
 * Created by Unaka Muigai on 9/13/2016.
 */
var menu = document.getElementById('menu');

var clicks = 0;
function showMenu() {
    clicks++;
    console.log(clicks + " click");
}
menu.onclick = function() {showMenu()};
