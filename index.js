'use strict';

const body = document.querySelector('body');
const form = document.createElement('form');
const myInput = document.createElement('input');
const paragraph = document.createElement('p');

form.append(myInput, paragraph);
body.append(form);

let timer;           
myInput.addEventListener('keyup', () => {
    clearTimeout(timer);
    if (myInput.value) {
        timer = setTimeout(() => {
          let text = myInput.value;
          paragraph.textContent = text;
        }, 300);
    }
});




