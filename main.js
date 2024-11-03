document.addEventListener("DOMContentLoaded", function () {
    var swiper = new Swiper(".custom-swiper", {
        slidesPerView: 'auto',
        spaceBetween: 16,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
            type: 'bullets',
           },
    });
  });
