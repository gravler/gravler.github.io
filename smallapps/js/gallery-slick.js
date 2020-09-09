$(document).ready(function(){
    $('.gallery__slider').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        prevArrow: '<img class="gallery__arrow-left" src="img/gallery/arrow-left.svg" alt="left arrow">',
        nextArrow: '<img class="gallery__arrow-right" src="img/gallery/arrow-right.svg" alt="right arrow">',
        dots: true,
        responsive: [
            {
                breakpoint: 992,
                settings: {
                  slidesToShow: 2
                }
            },
            {
                breakpoint: 768,
                settings: {
                  slidesToShow: 1
                }
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                    arrows: false
                }
            }
        ]
    });
});