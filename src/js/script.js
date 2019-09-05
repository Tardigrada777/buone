// Your js code

// clients-slider code
new Glide('.c-clients-slider', {
  type: 'slider',
  startAt: 0,
  perView: 4,
  rewind: false,
  classes: {
    activeNav: 'c-clients-slider__bullet--active'
  },
  breakpoints: {
    900: {
      perView: 3
    },
    700: {
      perView: 1
    }
  }
}).mount();

// reviews-slider code
new Glide('.c-review-slider', {
  type: 'slider',
  startAt: 0,
  perView: 1,
  rewind: false,
  classes: {
    activeNav: 'c-review-slider__bullet--active'
  }
}).mount();

// header-slider code
new Glide('.c-header-slider', {
  type: 'carousel',
  startAt: 0,
  perView: 1,
  rewind: false,
  classes: {
    activeNav: 'c-header-slider__bullet--active'
  }
}).mount();

//  sidebar code
function createBlackScreen() {
  const black = document.createElement('div');
  black.classList.add('black-screen');
  black.hidden = true;
  document.body.appendChild(black);
  return black;
}

function initSidebar(drawerSelector, sidebarSelector) {
  const drawer = document.querySelector(drawerSelector);
  const sidebar = document.querySelector(sidebarSelector);
  const blackScreen = createBlackScreen();
  const header = document.querySelector('.header');

  drawer.addEventListener('click', () => {
    blackScreen.hidden = false;
    sidebar.style.display = 'flex';
    sidebar.style.right = '0';

    header.style.overflow = 'hidden';
    document.documentElement.style.overflow = 'hidden';
  });
  blackScreen.addEventListener('click', () => {
    blackScreen.hidden = true;
    sidebar.style.display = 'none';
    sidebar.style.right = '-100%';
    header.style.overflow = 'auto';
    document.documentElement.style.overflow = 'auto';
  });
}

initSidebar('.c-menu--mobile__drawer', '.c-menu--mobile__sidebar');
