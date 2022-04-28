'use strict';

(function () {
  var menu = document.querySelector('.main-nav');
  var menuToggle = document.querySelector('.main-nav__toggle');

  console.log(99);

  // document.body.classList.remove('no-js');

  if (menuToggle) {
    console.log(88);
    menuToggle.addEventListener('click', function (evt) {
      if (menu) {
        // evt.currentTarget.classList.toggle('main-nav__menu-toggle--active');
        menu.classList.toggle('main-nav--opened');
      }
    });
  }
})();
