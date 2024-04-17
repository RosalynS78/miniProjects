// document.addEventListener('DOMContentLoaded', function () {
//     var modeSwitch = document.querySelector('.mode-switch');
  
//     modeSwitch.addEventListener('click', function () {                     document.documentElement.classList.toggle('dark');
//       modeSwitch.classList.toggle('active');
//     });
//   });


// function myFunction() {
//   var element = document.body;
//   element.classList.toggle("dark-mode");

// }


// On toggler clicked

var container = document.getElementsByClassName('container')[0];
document.getElementById('toggler').addEventListener('change', (event) => {
  console.log(toggler)
  event.target.checked ? container.removeAttribute('data-theme') : container.setAttribute('data-theme', 'dark');
});