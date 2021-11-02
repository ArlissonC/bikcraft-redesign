export default function initMenuMobile() {
  const menuButton = document.querySelector('.hambrguer');
  const menu = document.querySelector('.menu');

  function abrirMenu() {
    menu.classList.toggle('menu-ativo');
    menuButton.classList.toggle('menu-ativo');
  }
  menuButton.addEventListener('click', abrirMenu);
}