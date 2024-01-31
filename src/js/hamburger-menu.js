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