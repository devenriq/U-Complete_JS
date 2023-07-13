'use strict';

// Variables
const buttonsModal = document.querySelectorAll('.show-modal');
const hiddenElements = document.querySelectorAll('.hidden');
const buttonClose = document.querySelector('.close-modal');

// Funciones
const showHiddenElements = () => {
  hiddenElements.forEach(element => {
    element.classList.remove('hidden');
  });
};

const hideElements = () => {
  hiddenElements.forEach(element => {
    element.classList.add('hidden');
  });
};

const closeOnEsc = event => {
  if (event.key === 'Escape') {
    hideElements();
  }
};

// Event Listeners
buttonsModal.forEach(element => {
  element.addEventListener('click', showHiddenElements);
});

buttonClose.addEventListener('click', hideElements);

document.addEventListener('keydown', closeOnEsc);
