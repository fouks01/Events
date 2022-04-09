'use strict';

const e_btn = document.getElementById('e_btn');
const square = document.getElementById('square');
const inputText = document.querySelector('input[type=text]');
const btn = document.getElementById('btn');
const inputRange = document.querySelector('input[type=range]');
const span = document.getElementById('range-span');
const circle = document.getElementById('circle');

btn.onclick = function () {
    square.style.backgroundColor = inputText.value;
};

e_btn.style.display = "none";

span.textContent = '50%';
circle.style.height = '50%';
circle.style.width = '50%';

const logger = function (event) {
    span.textContent = event.target.value + '%';
    circle.style.height = +inputRange.value + '%';
    circle.style.width = +inputRange.value + '%';
};

inputRange.addEventListener('input', logger);
inputRange.addEventListener('change', logger);