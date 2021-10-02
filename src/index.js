import menuCardsTpl from './templates/cards-template.hbs';
import menuItems from './menu.json';
import './sass/main.scss';

const refs = {
  menuRef: document.querySelector('.js-menu'),
  themeSwitchRef: document.getElementById(['theme-switch-toggle']),
};
const { menuRef, themeSwitchRef } = refs;

const createMenuCardsMarkup = menuItems => menuCardsTpl(menuItems);

menuRef.insertAdjacentHTML('beforeend', createMenuCardsMarkup(menuItems));

const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};
const { LIGHT, DARK } = Theme;

themeSwitchRef.addEventListener('change', event => {
  if (event.target.checked) {
    document.body.classList = DARK;
    localStorage.setItem('currentTheme', document.body.classList);
  } else {
    document.body.classList = LIGHT;
    localStorage.setItem('currentTheme', document.body.classList);
  }
});

if (localStorage.getItem('currentTheme') === DARK) {
  themeSwitchRef.checked = true;
  document.body.classList = DARK;
} else {
  themeSwitchRef.checked = false;
  document.body.classList = LIGHT;
}
