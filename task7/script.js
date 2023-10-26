window.onload = function () {
    $('.gallery').slick({
        infinite: false,
        dots: true,
        responsive: [
            {
                breakpoint: 620,
                settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1
                }
            },
            {
              breakpoint: 800,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
              }
            }
        ],
        slidesToShow: 3,
        slidesToScroll: 3,
    });
};
