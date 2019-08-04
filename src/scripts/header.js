// Header main menu open animation
function toggleMainMenu () {
  const mobileMainMenuTrigger = document.querySelector('.mobile-menu-trigger-button');
  const mobileMainMenu = document.querySelector('.menu-bar');
  const mobileMainMenuActiveItem = document.querySelector(
    '.menu > ul > li:first-child a'
  );

  const showMainMenu = () => {
    mobileMainMenu.classList.toggle('open');
    if (mobileMainMenu.classList.contains('open')) {
      mobileMainMenuActiveItem.classList.add('active');
    } else {
      mobileMainMenuActiveItem.classList.remove('active');
    }
  };

  mobileMainMenuTrigger.addEventListener('click', showMainMenu);
}

module.exports = toggleMainMenu;
