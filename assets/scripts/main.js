// // Вывод подсказки в дате
// // *****
document.querySelector(".header-top-date a").setAttribute("data-bs-title", outputText);
const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]');
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl));


// Active carousel
// *****
const carouselItem = document.querySelector('.carousel-item');
if (carouselItem) carouselItem.classList.add('active');


// Active tabs page
// *****
const firstTab = document.querySelector(".content-box .content-tabs .nav-link");
const firstTabPane = document.querySelector(".content-box .content-tabs .tab-pane");
if (firstTab) {
    firstTab.classList.add('active');
    firstTabPane.classList.add('active', 'show');
}

// Получаем элемент гирлянды
const bells = document.querySelectorAll('.bell');

// Добавляем обработчик события mouseover
bells.forEach(bell => {
    bell.addEventListener('mouseover', function () {
        this.classList.add('swing');
    });

    // Убираем класс swing, когда анимация заканчивается
    bell.addEventListener('animationend', function () {
        this.classList.remove('swing');
    });
});


// None tabs page
// *****
// Получаем все контейнеры с табами
const tabContainers = document.querySelectorAll('.content-box .nav-tabs');

tabContainers.forEach(container => {
    const tabs = container.querySelectorAll('.nav-item'); // Получаем табы в текущем контейнере
    let hasContent = false;

    tabs.forEach(tab => {
        const targetId = tab.querySelector('button').getAttribute('data-bs-target');
        const contentElement = document.querySelector(targetId); // Ищем элемент по селектору

        // Проверяем, существует ли элемент
        if (contentElement) {
            const content = contentElement.innerHTML.trim();
            if (content) {
                hasContent = true; // Если есть контент, устанавливаем hasContent в true
            }
        }
    });

    // Скрываем табы в текущем контейнере, если нет контента
    if (!hasContent) {
        container.style.display = 'none'; // Скрываем контейнер с табами
    }
});


// Archive posts
// *****
const contentArchiveNews = document.querySelector('.content-archive .MapBody');
if (contentArchiveNews) {
    contentArchiveNews.classList.add('row');
}


// Table
// *****
const table = document.querySelectorAll('.content-box table');
if (table) {
    table.forEach(item => item.classList.add('table', 'table-bordered', 'table-hover'));
}


// Poll
// *****
const spanRadio = document.querySelectorAll('.section-poll input[type="radio"]~span');
const spanCheckbox = document.querySelectorAll('.section-poll input[type="checkbox"]~span');
if (spanRadio, spanCheckbox) {
    spanRadio.forEach(item => item.classList.add('poll-radio'));
    spanCheckbox.forEach(item => item.classList.add('poll-checkbox'));
}


// Header nav
// *****
const navbarNav = document.querySelector('.header-bottom .navbar .level_0');
navbarNav.classList.add('navbar-nav');

const navbarDropdown = document.querySelectorAll('.header-bottom .navbar .level_0>li.parent');
navbarDropdown.forEach(item => item.classList.add('nav-item', 'dropdown'));

const navbarDropdownMenu = document.querySelectorAll('.header-bottom .navbar .level_0 .level_1');
navbarDropdownMenu.forEach(item => item.classList.add('dropdown-menu'));

const navbarDropdownItem = document.querySelectorAll('.header-bottom .navbar .level_0 .level_1>li>a');
navbarDropdownItem.forEach(item => item.classList.add('dropdown-item'));


// Aside nav
// *****
const asideNavbarNav = document.querySelector('.aside .navbar .level_0');
const asideNavbarDropdown = document.querySelectorAll('.aside .navbar .level_0>li.parent');
const asideNavbarDropdownMenu = document.querySelectorAll('.aside .navbar .level_0 .level_1');
const asideNavbarDropdownMenuShow = document.querySelectorAll('.aside .navbar .level_0 li.parent_active .level_1, .aside .navbar .level_0 li.active .level_1');
const asideNavbarNavLink = document.querySelectorAll('.aside .navbar .level_0>.parent');
const asideNavbarDropdownItem = document.querySelectorAll('.aside .navbar .level_0 .level_1>li>a');

if (asideNavbarNav) {
    asideNavbarNav.classList.add('navbar-nav');
    asideNavbarDropdown.forEach(item => item.classList.add('nav-item', 'dropdown'));
    asideNavbarDropdownMenu.forEach(item => item.classList.add('dropdown-menu'));
    asideNavbarNavLink.forEach(item => item.classList.add('nav-link'));
    asideNavbarDropdownItem.forEach(item => item.classList.add('dropdown-item'));
}

if (asideNavbarDropdownMenuShow) asideNavbarDropdownMenuShow.forEach(item => item.classList.add('show'));


// Fixed header
// *****
window.addEventListener('scroll', function () {
    document.getElementById('header-nav').classList.toggle('header-nav-fixed', window.scrollY > 335)
});


// Scroll-to-top
// *****
$(window).scroll(function () {
    if ($(this).scrollTop() > 300) {
        $('#top').fadeIn();
    } else {
        $('#top').fadeOut();
    }
});

$('#top').click(function () {
    $('html, body').animate({ scrollTop: 0 }, 500);
    return false;
});


// Sch-map
// *****
const mapTitle = document.createElement('div'); mapTitle.className = 'sch-map-title';
const schMap = document.querySelector('.footer-sch-map');

mapTitle.textContent = 'Для активации карты нажмите по ней';
schMap.appendChild(mapTitle);

schMap.onclick = function () {
    this.children[0].removeAttribute('style');
    mapTitle.parentElement.removeChild(mapTitle);
}

schMap.onmousemove = function (event) {
    mapTitle.style.display = 'block';
    if (event.offsetY > 10) mapTitle.style.top = event.offsetY + 20 + 'px';
    if (event.offsetX > 10) mapTitle.style.left = event.offsetX + 20 + 'px';
}
schMap.onmouseleave = function () {
    mapTitle.style.display = 'none';
}

// Loading=lazy
// *****
const images = document.querySelectorAll('img');
if (images.length > 0) {
    images.forEach((img) => {
        img.setAttribute('loading', 'lazy');
    });
}

// lang=ru
// *****
document.querySelector('html').setAttribute('lang', 'ru');


// Owl-carousel
// *****
$('.owl-carousel.owl-banners-official, .owl-carousel.owl-banners').owlCarousel({
    responsiveClass: true,
    nav: false,
    loop: true,
    margin: 14,
    lazyLoad: true,
    autoplay: true,
    autoplayTimeout: 4000,
    autoplayHoverPause: true,
    dots: false,
    autoWidth: true,
});


// Fancy-box
// *****
const fancy = document.querySelectorAll('[data-fancybox="gallery"]');
if (fancy.length > 0) {
    Fancybox.bind(fancy.forEach(item => item, {
        // Your custom options for a specific gallery
    }));
}


// Privacy-policy
// *****
function getCookie(name) {
    let matches = document.cookie.match(new RegExp(
        "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
    ));
    return matches ? decodeURIComponent(matches[1]) : undefined;
}

function setCookie(name, value, options = {}) {

    options = {
        path: '/',
        // при необходимости добавьте другие значения по умолчанию
        ...options
    };

    if (options.expires instanceof Date) {
        options.expires = options.expires.toUTCString();
    }

    let updatedCookie = encodeURIComponent(name) + "=" + encodeURIComponent(value);



    for (let optionKey in options) {
        updatedCookie += "; " + optionKey;
        let optionValue = options[optionKey];
        if (optionValue !== true) {
            updatedCookie += "=" + optionValue;
        }
    }



    document.cookie = updatedCookie;
}


if (document.getElementById('privacy_policy')) {
    if (getCookie('privacy_policy') === undefined) {
        document.getElementById('privacy_policy').style.display = '';
        console.log(document.getElementById('privacy_policy'));
    }
}

if (document.getElementById('privacy_policy_btn')) {
    document.getElementById('privacy_policy_btn').addEventListener('click', function () {
        var date = new Date;
        date.setDate(date.getDate() + 1);
        setCookie('privacy_policy', 1, { expires: date });
        document.getElementById('privacy_policy').style.display = 'none';
    });
}
