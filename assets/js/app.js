
// object select element
const selectElement = {
  dropdownBtn: document.getElementsByClassName("dropdown_button"),
  subNavItem: document.getElementsByClassName("dropdown_sub"),
}

// element destructure
let { dropdownBtn, subNavItem } = selectElement

  ;[...dropdownBtn].forEach((innerBtn, index) => {
    let innerNav = subNavItem[index];
    innerBtn.addEventListener("click", function () {
      $(innerNav).slideToggle();
      $(".dropdown_sub").not(innerNav).slideUp();
      $(".dropdown_button").removeClass("active");
      $(innerBtn).toggleClass("active");
    });
  });

//product list

$(function (e) {
  "use strict";
  e(".scrap_active").slick({
    dots: true,
    infinite: true,
    speed: 300,
    arrows: false,
    autoplay: true,
    slidesToShow: 3,
    appendArrows: e(".arrow_product"),
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });
});

//testimonial
$(function (e) {
  "use strict";
  e(".testimonial__active").slick({
    dots: true,
    infinite: true,
    speed: 300,
    arrows: false,
    autoplay: true,
    slidesToShow: 1,
    slidesToScroll: 1,

  });
});