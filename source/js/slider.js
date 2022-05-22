const slider = document.querySelector('.slider');
const sliderToggler = slider.querySelector('.slider__toggler');
const beforeItem = slider.querySelector('.slider__item--before');
const afterItem = slider.querySelector('.slider__item--after');
const beforeButton = slider.querySelector('.slider__button--before');
const afterButton = slider.querySelector('.slider__button--after');
const scrollbar = slider.querySelector('.slider__scrollbar');

const switchSlider = () => {
  if (beforeItem.classList.contains('slider__item--active')) {
    beforeItem.classList.remove('slider__item--active');
    afterItem.classList.add('slider__item--active');
    sliderToggler.classList.add('slider__toggler--active');
  } else {
    afterItem.classList.remove('slider__item--active');
    beforeItem.classList.add('slider__item--active');
    sliderToggler.classList.remove('slider__toggler--active');
  }
}

noUiSlider.create(scrollbar, {
  start: [5],
  connect: 'lower',
  step: 1,
  range: {
      'min': 0,
      'max': 10
  }
});

sliderToggler.addEventListener('click', switchSlider);

beforeButton.addEventListener('click', () => {
  switchSlider();
  afterItem.style.width = 0;
  beforeItem.style.width = '100%';
});

afterButton.addEventListener('click', () => {
  switchSlider();
  beforeItem.style.width = 0;
  afterItem.style.width = '100%';
});
