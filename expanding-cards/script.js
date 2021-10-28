'use strict';

const panels = document.querySelectorAll('.panel');

//Will loop to each panel and add active class
panels.forEach(panel => {
  panel.addEventListener('click', function () {
    removeActiveClass();
    panel.classList.add('active');
  });
});

//Will remove all active class to each panel
function removeActiveClass() {
  panels.forEach(panel => {
    panel.classList.remove('active');
  });
}
