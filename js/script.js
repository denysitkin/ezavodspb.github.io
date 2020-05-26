var overlay = document.getElementById('overlay');
var closeMenu = document.getElementById('close-menu');
var menu = document.getElementById('modal-menu');
var info = document.getElementById('modal-info');
var image = document.getElementById('modal-image');
var background1 = document.getElementById('slider__item'); 
var background2 = document.getElementById('slider__item2'); 
var background3 = document.getElementById('slider__item3'); 
var sliderBtn1 = document.getElementById('slider-btn'); 
var sliderBtn2 = document.getElementById('slider-btn2'); 
var sliderBtn3 = document.getElementById('slider-btn3'); 

document.getElementById('open-menu').addEventListener('click', function() {
    overlay.classList.add('show-menu');
});

document.getElementById('close-menu').addEventListener('click', function() {
    overlay.classList.remove('show-menu');
});

background1.addEventListener('mouseover', function() {
    sliderBtn1.classList.add('show-btn');
});

background1.addEventListener('mouseout', function() {
    sliderBtn1.classList.remove('show-btn');
});

background2.addEventListener('mouseover', function() {
    sliderBtn2.classList.add('show-btn');
});

background2.addEventListener('mouseout', function() {
    sliderBtn2.classList.remove('show-btn');
});

background3.addEventListener('mouseover', function() {
    sliderBtn3.classList.add('show-btn');
});

background3.addEventListener('mouseout', function() {
    sliderBtn3.classList.remove('show-btn');
});