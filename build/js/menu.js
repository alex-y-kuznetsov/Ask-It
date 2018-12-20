'use strict';

(function () {
  var menuToggler = document.querySelector('.menu-toggler');
  var menu = document.querySelector('.page-header__interface');

  var openMenu = function () {
    if (menu.classList.contains('page-header__interface--hidden')) {
      menu.classList.remove('page-header__interface--hidden');
    } else {
      menu.classList.add('page-header__interface--hidden');
    }
  };

  openMenu();

  menuToggler.addEventListener('click', openMenu);
})();
