// MAP
function initMap() {};

var myMap = document.getElementById('map');

if(myMap) {
    window.initMap = function() {
        var nj = {lat: -33.865, lng: 151.209};
        var map = new google.maps.Map(document.getElementById('map'), {
            zoom: 18,
            center: nj
        });
        var marker = new google.maps.Marker({
            position: nj,
            map: map
        })
    }
}


// CAROUSEL

var elem = document.querySelector('.main-carousel');
var flkty = new Flickity( elem, {
    cellAlign: 'left',
    contain: true,
    autoPlay: true
});


// MENU

var menuBtn = document.getElementById("menu-button");
var lineOne = document.getElementById("line-1");
var lineTwo = document.getElementById("line-2");
var lineThree = document.getElementById("line-3");
var navList = document.getElementById("nav-list");

function menuBtnClicked() {
    navList.classList.toggle("active");
    lineOne.classList.toggle("active");
    lineTwo.classList.toggle("active");
    lineThree.classList.toggle("active");
};

menuBtn.addEventListener('click', menuBtnClicked);