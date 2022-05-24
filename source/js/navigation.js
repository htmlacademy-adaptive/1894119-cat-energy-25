const navigation = document.querySelector('.main-nav');
const navigationToggle = navigation.querySelector('.main-nav__toggle');

navigation.classList.remove('main-nav--nojs');

navigationToggle.addEventListener('click', () => {
  navigation.classList.toggle('main-nav--opened');
  navigation.classList.toggle('main-nav--closed');
})
