const elements = {
    siteFont: document.querySelectorAll(".wrapper, .wrapper h1, .wrapper h2, .wrapper h3, .wrapper h4, .wrapper h5, .wrapper h6"),
    siteContent: document.querySelectorAll("button, a, li, h1, h2, h3, h4, h5, h6, figcaption, footer, div, span, b, input"),
    siteBorder: document.querySelectorAll("div, article, hr"),
    zIndexFix: document.querySelectorAll('.header, .privacy-policy-popup'),
    img: document.querySelectorAll("#ya-site-form0 input.ya-site-form__submit, img, .footer-sch-map, .youtube, .ya-share2__list"),
    crossEyeSvg: document.getElementById("cross-eye"),
    normalEyeSvg: document.getElementById("normal-eye"),
    crossEyeWhiteSvg: document.getElementById("cross-eye-white"),
    homeSvg: document.querySelector('.home'),
    homeWhiteSvg: document.querySelector('.home-white'),
    xMarkSvg: document.querySelector('.btn-close'),
    xMarkWhiteSvg: document.querySelector('.btn-close-white'),
    // menuBurgerSvg: document.querySelector('.menu-burger'),
    // menuBurgerWhiteSvg: document.querySelector('.menu-burger-white'),
    // chevronSvg: document.querySelectorAll('.mobile-chevron.black'),
    // chevronWhiteSvg: document.querySelectorAll('.mobile-chevron.white'),
    siteBody: document.querySelector('body'),
    vision: document.querySelector(".vision"),
    siteBackground: document.querySelector(".wrapper"),
    imgYes: document.getElementById("imagesYes"),
    letterSpacing: document.querySelectorAll(".changeLetterSpacing")
};

function updateStyles() {
    elements.siteBackground.style.background = "#fff";
    elements.siteContent.forEach(item => item.style.zIndex = 'unset');
    elements.zIndexFix.forEach(item => item.style.zIndex = '20');
    [elements.crossEyeSvg, ...elements.chevronWhiteSvg].forEach(item => item.style.display = 'inline-block');
    [elements.vision, elements.xMarkWhiteSvg, elements.menuBurgerWhiteSvg, elements.homeWhiteSvg].forEach(item => item.style.display = 'block');
    [elements.xMarkSvg, elements.crossEyeWhiteSvg, elements.normalEyeSvg, elements.menuBurgerSvg, ...elements.chevronSvg, ...elements.homeSvg].forEach(item => item.style.display = 'none');
}

function applyStyles(borderColor, background, color) {
    updateStyles();
    elements.siteBorder.forEach(item => item.style.borderColor = borderColor);
    elements.siteContent.forEach(item => {
        item.style.background = background;
        item.style.color = color;
    });
}

function applyColorStyles(colorStyles) {
    applyStyles(colorStyles.borderColor, colorStyles.background, colorStyles.color);
}

const styles = {
    white: { borderColor: '#2E3332', background: '#fff', color: '#2E3332' },
    blue: { borderColor: '#00f', background: '#9dd1ff', color: '#00f' },
    black: { borderColor: '#fff', background: '#000', color: '#fff' },
    beige: { borderColor: 'brown', background: '#f7f3d6', color: 'brown' }
};

function applyWhiteStyles() {
    applyColorStyles(styles.white);
    elements.chevronSvg.forEach(item => item.style.display = 'inline-block');
    [elements.xMarkWhiteSvg, elements.menuBurgerWhiteSvg, elements.homeWhiteSvg, ...elements.chevronWhiteSvg].forEach(item => item.style.display = 'none');
    [elements.menuBurgerSvg, elements.xMarkSvg, elements.homeSvg].forEach(item => item.style.display = 'block');
}

function applyColorScheme(colorScheme) {
    switch (colorScheme) {
        case 'blue':
            applyColorStyles(styles.blue);
            break;
        case 'black':
            applyColorStyles(styles.black);
            elements.crossEyeSvg.style.display = "none";
            elements.crossEyeWhiteSvg.style.display = "block";
            break;
        case 'beige':
            applyColorStyles(styles.beige);
            break;
        default:
            applyWhiteStyles();
    }
}

function deleteVisionStyles() {
    elements.imgYes.dispatchEvent(new Event("click"));
    elements.siteContent.forEach(item => item.removeAttribute("style"));
    [...elements.chevronWhiteSvg, ...elements.siteFont, ...elements.img].forEach(item => item.removeAttribute("style"));
    elements.siteBorder.forEach(item => item.style.removeProperty("border-color"));
    elements.siteBody.removeAttribute("class");
    [elements.vision, elements.crossEyeSvg, elements.crossEyeWhiteSvg, elements.xMarkSvg, elements.menuBurgerSvg, ...elements.chevronSvg, elements.homeSvg].forEach(item => item.style.display = 'none');
    [elements.xMarkWhiteSvg, elements.menuBurgerWhiteSvg, elements.homeWhiteSvg].forEach(item => item.style.display = 'block');
    elements.normalEyeSvg.style.display = "inline-block";
    localStorage.clear();
}

function normalEye(event) {
    event.preventDefault();
    applyWhiteStyles();
    localStorage.setItem('applyWhiteStyles', 'true');
}

function crossEye(event) {
    event.preventDefault();
    deleteVisionStyles();
}

function colorSiteClick(event) {
    event.preventDefault();
    elements.siteBody.removeAttribute("class");
    const id = this.id.replace('colorSite', '').toLowerCase();
    applyColorScheme(id);
    localStorage.setItem(`apply${id.charAt(0).toUpperCase() + id.slice(1)}Styles`, 'true');
    ['applyBlueStyles', 'applyBlackStyles', 'applyWhiteStyles', 'applyBeigeStyles'].forEach(key => key !== `apply${id.charAt(0).toUpperCase() + id.slice(1)}Styles` && localStorage.removeItem(key));
}

function updateFontSizes(changeAmount) {
    elements.siteFont.forEach(item => {
        const currentSize = parseFloat(window.getComputedStyle(item).fontSize);
        const newSize = Math.min(Math.max(currentSize + changeAmount, 12), 24);
        item.style.fontSize = `${newSize}px`;
    });
}

function updateImageDisplay(filter, display) {
    elements.img.forEach(item => {
        item.style.filter = filter;
        item.style.display = display;
    });
}

function imagesNoClick(event) {
    event.preventDefault();
    updateImageDisplay('grayscale(0%)', 'none');
    localStorage.setItem('applyImgDelete', 'true');
    ['applyImgColor', 'applyImgBlackWhiteStyles'].forEach(key => localStorage.removeItem(key));
}

function imagesYesClick(event) {
    event.preventDefault();
    updateImageDisplay('grayscale(0%)', 'inline-block');
    localStorage.setItem('applyImgColor', 'true');
    ['applyImgDelete', 'applyImgBlackWhiteStyles'].forEach(key => localStorage.removeItem(key));
}

function imagesBlackWhiteClick(event) {
    event.preventDefault();
    updateImageDisplay('grayscale(100%)', 'inline-block');
    localStorage.setItem('applyImgBlackWhiteStyles', 'true');
    ['applyImgColor', 'applyImgDelete'].forEach(key => localStorage.removeItem(key));
}

function spacing() {
    const data = this.getAttribute("data-letter-spacing");
    elements.siteFont.forEach(item => item.style.letterSpacing = `${data}px`);
    localStorage.setItem('applySpaceStyles', data);
}

function changeImageFontSpacing() {
    elements.siteFont.forEach(item => {
        item.style.letterSpacing = `${localStorage.getItem('applySpaceStyles')}px`;
        item.style.fontSize = `${localStorage.getItem('applyFontSize')}px`;
    });

    if (localStorage.getItem('applyImgColor') !== null) {
        updateImageDisplay('grayscale(0%)', 'inline-block');
    } else if (localStorage.getItem('applyImgBlackWhiteStyles') !== null) {
        updateImageDisplay('grayscale(100%)', 'inline-block');
    } else if (localStorage.getItem('applyImgDelete') !== null) {
        updateImageDisplay('grayscale(0%)', 'none');
    }
}

function init() {
    elements.normalEyeSvg.addEventListener("click", normalEye);
    elements.crossEyeSvg.addEventListener("click", crossEye);
    elements.crossEyeWhiteSvg.addEventListener("click", crossEye);
    document.getElementById("reduceFont").addEventListener("click", () => updateFontSizes(-1));
    document.getElementById("increaseFont").addEventListener("click", () => updateFontSizes(1));
    document.querySelectorAll(".colorSite").forEach(item => item.addEventListener("click", colorSiteClick));
    elements.letterSpacing.forEach(item => item.addEventListener("click", spacing));
    document.getElementById("imagesNo").addEventListener("click", imagesNoClick);
    elements.imgYes.addEventListener("click", imagesYesClick);
    document.getElementById("imagesBlackWhite").addEventListener("click", imagesBlackWhiteClick);
}

init();

const colorScheme = ['applyWhiteStyles', 'applyBlackStyles', 'applyBlueStyles', 'applyBeigeStyles'].find(key => localStorage.getItem(key));
if (colorScheme) {
    applyColorScheme(colorScheme.replace('apply', '').replace('Styles', '').toLowerCase());
    changeImageFontSpacing();
}
