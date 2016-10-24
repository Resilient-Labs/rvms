/**
 * Created by Unaka Muigai on 9/13/2016.
 */
var menu = document.getElementById('menu');

var clicks = 0;
function showMenu() {
    clicks++;
    console.log(clicks + " click");

}
//menu.onclick = function() {showMenu()};


$('.hamburger-menu').on('click', function () {
    $('.full-screen-menu').toggleClass('open');
    $('.hamburger-menu').toggle();
    $('body, html').toggleClass('hide-overflow')
    console.log('clicked');
});

// Code for filtering through the team / board members
var $grid = $('.team').isotope({
    itemSelector: '.team-member',
    layoutMode: 'fitRows'
});

// filter items on button click
$('.three-buttons').on( 'click', 'button', function() {
    var filterValue = $(this).attr('data-filter');
    console.log(filterValue);
    $grid.isotope({ filter: filterValue });
});
