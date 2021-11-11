'use strict';

// select elements to manipulate or work with
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnsOpenModal = document.querySelectorAll('.show-modal');

// function to open model by removing the hidden class
const openModal = function () {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};
// function to close the model by adding the hidden class
const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

// looping through the btnsOpenModal element (Node list/array) to add an event listener
// listen for the click and then runs the openModal function
for (let i = 0; i < btnsOpenModal.length; i++)
  btnsOpenModal[i].addEventListener('click', openModal);

// listening for clicks on the overlay and close buttons, then runs closeModal function
btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

// javascript will call this function automatically when a key is pressed
document.addEventListener('keydown', function (e) {
  //console.log(e.key);

  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    // ! means does not contain
    closeModal();
  }
});
