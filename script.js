const button = document.getElementById('btn');
const input = document.getElementById('text');
let value = '';
let value2 = '';
const e_btn = document.getElementById('e_btn');
const circle = document.getElementById('circle');
const range = document.querySelector('[type=range]');

const color = function () {
  button.style = 'background-color:' + value;
};
const logger = function (event) {
  console.log(event.target.value);
  value = event.target.value;
};

const display = function () {
  e_btn.style = 'display: none';
};

const valueRange = function (event) {
  value2 = event.target.value;
  // circle.style = 'height:' + value2 + '%' + ';' + 'width:' + value2 + '%';
  circle.style.cssText = `
  height: ${value2}%;
  width: ${value2}%;
  `;
};

button.addEventListener('click', color);
e_btn.addEventListener('click', display);
input.addEventListener('input', logger);
range.addEventListener('input', valueRange);