const swiperEl = document.getElementsByClassName('swiper')[0]
const btnPrev = document.getElementsByClassName('swiper-button-prev')[0]
const btnNext = document.getElementsByClassName('swiper-button-next')[0]
const pagination = document.getElementsByClassName('swiper-pagination')[0]

const swiper = new Swiper(swiperEl, {
  loop: true,

  pagination: {
    el: pagination,
  },

  navigation: {
    nextEl: btnNext,
    prevEl: btnPrev,
  },

});
