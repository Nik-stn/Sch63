// // Вывод даты
// // *****
// const d = new Date();
// const day = ["Воскресенье,", "Понедельник,", "Вторник,", "Среда,", "Четверг,", "Пятница,", "Суббота,"];
// const month = ["января", "февраля", "марта", "апреля", "мая", "июня", "июля", "августа", "сентября", "октября", "ноября", "декабря"];

// // Форматирование даты для атрибута datetime
// const datetimeString = d.getFullYear() + '-' + 
//                        String(d.getMonth() + 1).padStart(2, '0') + '-' + 
//                        String(d.getDate()).padStart(2, '0') + 'T' + 
//                        String(d.getHours()).padStart(2, '0') + ':' + 
//                        String(d.getMinutes()).padStart(2, '0') + ':' + 
//                        String(d.getSeconds()).padStart(2, '0');

// // Установка значения атрибута datetime
// document.getElementById("currentTime").setAttribute("datetime", datetimeString);

// // Вывод текста в элемент
// const outputText = day[d.getDay()] + " " + d.getDate() + " " + month[d.getMonth()] + " " + d.getFullYear();
// document.querySelector("#currentTime span").innerHTML = outputText;

// // Вывод подсказки в дате
// // *****
document.querySelector(".header-top-date a").setAttribute("data-bs-title", outputText);
const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]');
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl));


// Active carousel
// *****
document.querySelector('.carousel-item').classList.add('active');


// Poll
// *****
const spanRadio = document.querySelectorAll('.section-poll input[type="radio"]~span');
const spanCheckbox = document.querySelectorAll('.section-poll input[type="checkbox"]~span');

spanRadio.forEach( item => item.classList.add('poll-radio'));
spanCheckbox.forEach( item => item.classList.add('poll-checkbox'));

// Header nav
// *****
const navbarNav = document.querySelector('.header-bottom .navbar .level_0');
navbarNav.classList.add('navbar-nav');

const navbarDropdown = document.querySelectorAll('.header-bottom .navbar .level_0>li.parent');
navbarDropdown.forEach( item => item.classList.add('nav-item', 'dropdown'));

const navbarDropdownMenu = document.querySelectorAll('.header-bottom .navbar .level_0 .level_1');
navbarDropdownMenu.forEach( item => item.classList.add('dropdown-menu'));

const navbarDropdownItem = document.querySelectorAll('.header-bottom .navbar .level_0 .level_1>li>a');
navbarDropdownItem.forEach( item => item.classList.add('dropdown-item'));


// Owl-carousel
// *****
$('.owl-carousel.owl-banners-official, .owl-carousel.owl-banners').owlCarousel({
    responsiveClass:true,
	nav:false,
	loop:true,
	margin:14,
    lazyLoad: true,
	autoplay:true,
    autoplayTimeout:4000,
    autoplayHoverPause:true,
	dots:false,
	autoWidth:true,
});


// Sch-map
// *****
const mapTitle = document.createElement('div'); mapTitle.className = 'sch-map-title';
const schMap = document.querySelector('.footer-sch-map');

 mapTitle.textContent = 'Для активации карты нажмите по ней';
 schMap.appendChild(mapTitle);

 schMap.onclick = function() {
     this.children[0].removeAttribute('style');
     mapTitle.parentElement.removeChild(mapTitle);
 }

 schMap.onmousemove = function(event) {
     mapTitle.style.display = 'block';
     if(event.offsetY > 10) mapTitle.style.top = event.offsetY + 20 + 'px';
     if(event.offsetX > 10) mapTitle.style.left = event.offsetX + 20 + 'px';
 }
 schMap.onmouseleave = function() {
     mapTitle.style.display = 'none';
 }

// Fixed header
// *****
 window.addEventListener('scroll', function() {
    document.getElementById('header-nav').classList.toggle('header-nav-fixed', window.scrollY > 435)
});

  
// Scroll-to-top
// *****
$(window).scroll(function() {
    if ($(this).scrollTop() > 300) {
        $('#top').fadeIn();
    } else {
        $('#top').fadeOut();
    }
});

$('#top').click(function() {
    $('html, body').animate({scrollTop: 0}, 500);
    return false;
});

