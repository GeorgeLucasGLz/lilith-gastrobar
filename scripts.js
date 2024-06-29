// let swiper = new Swiper(".mySwiper", {
//   slidesPerView: 1,
//   spaceBetween: 30,
//   loop: true,
//   pagination: {
//     el: ".swiper-pagination",
//     clickable: true,
//   },
//   navigation: {
//     nextEl: ".swiper-button-next",
//     prevEl: ".swiper-button-prev",
//   },
// });

// lightGallery(document.querySelector('#cardapio1'))
// lightGallery(document.querySelector('#cardapio2'))
// lightGallery(document.querySelector('#cardapio3'))

let swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  spaceBetween: 30,
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

lightGallery(document.querySelector('#cardapio1'))
lightGallery(document.querySelector('#cardapio2'))
lightGallery(document.querySelector('#cardapio3'))

lightGallery(document.querySelector('#first'))
lightGallery(document.querySelector('#second'))