// Poll
// *****
const spanRadio = document.querySelectorAll('.section-aside-poll input[type="radio"]~span');
const spanCheckbox = document.querySelectorAll('.section-aside-poll input[type="checkbox"]~span');

spanRadio.forEach( item => item.classList.add('poll-radio'));
spanCheckbox.forEach( item => item.classList.add('poll-checkbox'));

// Aside banners
// *****
$('.slick-aside-banners').slick({
    vertical:true,
    verticalSwiping: true,
    slidesToShow: 10,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false,
    responsive: [
        {
            breakpoint: 992,
            settings: {
                vertical:false,
                slidesToShow: 5,
            }
        },
        {
            breakpoint: 768,
            settings: {
                vertical:false,
                slidesToShow: 4,
            }
        },
        {
            breakpoint: 576,
            settings: {
                vertical:false,
                slidesToShow: 3,
            }
        },
        {
            breakpoint: 480,
            settings: {
                vertical:false,
                slidesToShow: 2,
            }
        },
      ]
});