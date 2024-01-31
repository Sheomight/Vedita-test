const menuBtn = document.getElementById('hamburger');
    let menu = document.getElementById('hamburger-menu');
    let isMenuClose = true;
    menuBtn.addEventListener('click', () => {
      if (isMenuClose) {
        menu.classList.add('hamburger__menu_open');
        menuBtn.classList.add('hamburger__btn_open');
        isMenuClose = !isMenuClose;
      }else {
        let animationMenu = menu.animate([
          {transform: 'translateX(0)'},
          {transform: 'translateX(100vw)'}
        ], 200)
        animationMenu.addEventListener('finish', e => {
          menu.classList.remove('hamburger__menu_open');
        })
        menuBtn.animate([
          {transform: 'rotate(-90deg)'},
          {transform: 'rotate(0)'}
        ], 200)
        menuBtn.classList.remove('hamburger__btn_open');
        isMenuClose = !isMenuClose;
      }
    })
const openBtn = document.getElementById('open-modal-btn')
const modal = document.getElementById('modal-window')
const xBtns = document.getElementsByClassName('modal__close')
const form = document.getElementById('modal-form')
const confirmed = document.getElementById('modal-confirm')
const closeBtn = document.ge
const submitBtn = document.getElementById('submit-btn')
let isModalOpen = false

openBtn.addEventListener('click', (e) => {
  if (!isModalOpen) {
    modal.style.display = 'flex'
    document.body.style.overflow = 'hidden'
    isModalOpen = !isModalOpen
  }
})

for (let xBtn of xBtns) {
  xBtn.addEventListener('click', (e) => {
    if (isModalOpen) {
      modal.style.display = 'none'
      isModalOpen = !isModalOpen
      form.style.display = 'flex'
    confirmed.style.display = 'none'
      document.body.style.overflow = 'visible'
    }
  })
}

confirmed.getElementsByClassName('modal__btn')[0].addEventListener('click', (e) => {
    modal.style.display = 'none'
    isModalOpen = !isModalOpen
    form.style.display = 'flex'
    confirmed.style.display = 'none'
    document.body.style.overflow = 'visible'
})

form.addEventListener('submit', (e) => {
  e.preventDefault()
})

submitBtn.addEventListener('click', (e) => {
    form.style.display = 'none'
    confirmed.style.display = 'flex'
})


const phone = document.getElementById('phone')

const maskOptions = {
  mask: '+{7}(000)000-00-00'
};
const mask = IMask(phone, maskOptions);
const button = document.getElementById('to-delivery-btn');

button.addEventListener('click', (e) => {

  const blockId = e.target.attributes.href.value

  if (blockId[0] == '#') {
    const block = document.getElementById(blockId.slice(1, blockId.length));

    block.scrollIntoView({
      behavior: 'smooth',
    });
  }
});
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
