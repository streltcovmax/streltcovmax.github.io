window.onload = function () {
  $(".gallery").slick({
      dots: true,
      infinite: false,
      responsive: [
          {
              breakpoint: 620,
              settings: {
                  slidesToScroll: 1,
                  slidesToShow: 1
              }
          },
          {
              breakpoint: 800,
              settings: {
                  slidesToScroll: 3,
                  slidesToShow: 3
              }
          }
      ],
      slidesToScroll: 3,
      slidesToShow: 3
  });
};
