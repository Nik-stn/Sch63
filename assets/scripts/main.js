document.querySelector(".header-top-date a").setAttribute("data-bs-title", outputText);
const tooltipTriggerList = document.querySelectorAll("[data-bs-toggle='tooltip']");
const tooltipList = Array.from(tooltipTriggerList).map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl));

const carouselItem = document.querySelector(".carousel-item");
if (carouselItem) {
    carouselItem.classList.add("active");
}

const firstTab = document.querySelector(".content-box .content-tabs .nav-link");
const firstTabPane = document.querySelector(".content-box .content-tabs .tab-pane");
if (firstTab) {
    firstTab.classList.add("active");
    firstTabPane.classList.add("active", "show");
}

const bells = document.querySelectorAll(".bell");
bells.forEach(bell => {
    bell.addEventListener("mouseover", () => {
        bell.classList.add("swing");
    });

    bell.addEventListener("animationend", () => {
        bell.classList.remove("swing");
    });
});

const tabContainers = document.querySelectorAll(".content-box .nav-tabs");
tabContainers.forEach(container => {
    const tabs = container.querySelectorAll(".nav-item"); 
    let hasContent = false;

    tabs.forEach(tab => {
        const targetId = tab.querySelector("button").getAttribute("data-bs-target");
        const contentElement = document.querySelector(targetId); 

        if (contentElement) {
            const content = contentElement.innerHTML.trim();
            if (content) {
                hasContent = true; 
            }
        }
    });

    if (!hasContent) {
        container.style.display = "none"; 
    }
});

const contentArchiveNews = document.querySelector(".content-archive .MapBody");
if (contentArchiveNews) {
    contentArchiveNews.classList.add("row");
}

const tables = document.querySelectorAll(".content-box table");
tables.forEach(item => item.classList.add("table", "table-bordered", "table-hover"));

const spanRadio = document.querySelectorAll(".section-poll input[type='radio'] ~ span");
const spanCheckbox = document.querySelectorAll(".section-poll input[type='checkbox'] ~ span");
spanRadio.forEach(item => item.classList.add("poll-radio"));
spanCheckbox.forEach(item => item.classList.add("poll-checkbox"));

const navbarNav = document.querySelector(".header-bottom .navbar .level_0");
if (navbarNav) {
    navbarNav.classList.add("navbar-nav");
}

const navbarDropdown = document.querySelectorAll(".header-bottom .navbar .level_0 > li.parent");
navbarDropdown.forEach(item => item.classList.add("nav-item", "dropdown"));

const navbarDropdownMenu = document.querySelectorAll(".header-bottom .navbar .level_0 .level_1");
navbarDropdownMenu.forEach(item => item.classList.add("dropdown-menu"));

const navbarDropdownItem = document.querySelectorAll(".header-bottom .navbar .level_0 .level_1 > li > a");
navbarDropdownItem.forEach(item => item.classList.add("dropdown-item"));

const asideNavbarNav = document.querySelector(".aside .navbar .level_0");
if (asideNavbarNav) {
    asideNavbarNav.classList.add("navbar-nav");
}

const asideNavbarDropdown = document.querySelectorAll(".aside .navbar .level_0 > li.parent");
const asideNavbarDropdownMenu = document.querySelectorAll(".aside .navbar .level_0 .level_1");
const asideNavbarNavLink = document.querySelectorAll(".aside .navbar .level_0 > .parent");
const asideNavbarDropdownItem = document.querySelectorAll(".aside .navbar .level_0 .level_1 > li > a");

asideNavbarDropdown.forEach(item => item.classList.add("nav-item", "dropdown"));
asideNavbarDropdownMenu.forEach(item => item.classList.add("dropdown-menu"));
asideNavbarNavLink.forEach(item => item.classList.add("nav-link"));
asideNavbarDropdownItem.forEach(item => item.classList.add("dropdown-item"));

const asideNavbarDropdownMenuShow = document.querySelectorAll(".aside .navbar .level_0 li.parent_active .level_1, .aside .navbar .level_0 li.active .level_1");
asideNavbarDropdownMenuShow.forEach(item => item.classList.add("show"));

window.addEventListener("scroll", () => {
    document.getElementById("header-nav").classList.toggle("header-nav-fixed", window.scrollY > 335);
});

$(window).scroll(function () {
    if ($(this).scrollTop() > 300) {
        $("#top").fadeIn();
    } else {
        $("#top").fadeOut();
    }
});

$("#top").click(function () {
    $("html, body").animate({ scrollTop: 0 }, 500);
    return false;
});

const mapTitle = document.createElement("div");
mapTitle.className = "sch-map-title";
const schMap = document.querySelector(".footer-sch-map");

if (schMap) {
    mapTitle.textContent = "Для активации карты нажмите по ней";
    schMap.appendChild(mapTitle);

    schMap.addEventListener("click", () => {
        schMap.children[0].removeAttribute("style");
        mapTitle.parentElement.removeChild(mapTitle);
    });

    schMap.addEventListener("mousemove", event => {
        mapTitle.style.display = "block";
        if (event.offsetY > 10) mapTitle.style.top = `${event.offsetY + 20}px`;
        if (event.offsetX > 10) mapTitle.style.left = `${event.offsetX + 20}px`;
    });

    schMap.addEventListener("mouseleave", () => {
        mapTitle.style.display = "none";
    });
}

const images = document.querySelectorAll("img");
images.forEach(img => {
    img.setAttribute("loading", "lazy");
});

document.documentElement.setAttribute("lang", "ru");

$(".owl-carousel.owl-banners-official, .owl-carousel.owl-banners").owlCarousel({
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

const fancy = document.querySelectorAll("[data-fancybox='gallery']");
if (fancy.length > 0) {
    Fancybox.bind(fancy);
}

function getCookie(name) {
    const matches = document.cookie.match(new RegExp(
        `(?:^|; )${name.replace(/([.$?*|{}()\[\]\\/+^])/g, '\\$1')}=([^;]*)`
    ));
    return matches ? decodeURIComponent(matches[1]) : undefined;
}

function setCookie(name, value, options = {}) {
    options = { path: '/', ...options };

    if (options.expires instanceof Date) {
        options.expires = options.expires.toUTCString();
    }

    let updatedCookie = `${encodeURIComponent(name)}=${encodeURIComponent(value)}`;

    Object.entries(options).forEach(([key, val]) => {
        updatedCookie += `; ${key}`;
        if (val !== true) {
            updatedCookie += `=${val}`;
        }
    });

    document.cookie = updatedCookie;
}

const privacyPolicy = document.getElementById("privacy_policy");
const privacyPolicyBtn = document.getElementById("privacy_policy_btn");

if (privacyPolicy && getCookie("privacy_policy") === undefined) {
    privacyPolicy.style.display = "";
}

if (privacyPolicyBtn) {
    privacyPolicyBtn.addEventListener("click", () => {
        const date = new Date();
        date.setDate(date.getDate() + 1);
        setCookie("privacy_policy", 1, { expires: date });
        privacyPolicy.style.display = "none";
    });
}
