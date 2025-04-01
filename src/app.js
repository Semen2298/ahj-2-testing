import isValidCardNumber from './validator';
import getCardType from './card-type';
import visaImg from './img/visa.png';
import mcImg from './img/mastercard.png';
import amexImg from './img/amex.png';
import mirImg from './img/mir.png';

document.querySelector('.icon-visa').src = visaImg;
document.querySelector('.icon-mastercard').src = mcImg;
document.querySelector('.icon-amex').src = amexImg;
document.querySelector('.icon-mir').src = mirImg;

export default class App {
  constructor() {
    this.form = document.querySelector('.card-form');
    this.input = this.form.querySelector('.card-input');
    this.result = this.form.querySelector('.result');
    this.icons = this.form.querySelectorAll('.icon');
  }

  init() {
    this.form.addEventListener('submit', (e) => {
      e.preventDefault();
      const number = this.input.value.trim();
      const type = getCardType(number);

      this.highlightIcon(type);

      if (isValidCardNumber(number)) {
        this.result.textContent = 'Card is valid';
        this.result.classList.add('valid');
        this.result.classList.remove('invalid');
      } else {
        this.result.textContent = 'Card is invalid';
        this.result.classList.add('invalid');
        this.result.classList.remove('valid');
      }
    });
  }

  highlightIcon(type) {
    this.icons.forEach(icon => icon.classList.remove('active'));
    if (type) {
      const icon = this.form.querySelector(`.icon-${type}`);
      if (icon) icon.classList.add('active');
    }
  }
}
