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

