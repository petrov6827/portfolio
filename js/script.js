// var Toggle = document.querySelector('.main-nav__toggle');
// var Close = document.querySelector('.main-nav__close');
// var Menu = document.querySelector('.menu');
// var Triangle = document.querySelector('.main__triangle');

// Toggle.addEventListener('click', function(event) {
//   event.preventDefault();
//   Menu.classList.add('menu--show');
//   Toggle.classList.add('toggle__hidden');
//   Triangle.classList.add('main__triangle--close');
// });

// Close.addEventListener('click', function(event) {
//   event.preventDefault();
//   Menu.classList.remove('menu--show');
//   Toggle.classList.remove('toggle__hidden');
//   Triangle.classList.remove('main__triangle--close');
// });

let Item = document.querySelector('.item');
let About = document.querySelector('.item__about');

Item.addEventListener('mouseover', function(event) {
  event.preventDefault();
  About.classList.add('.item__about--visible');
});

Item.addEventListener('mouseout', function(event) {
  event.preventDefault();
  About.classList.remove('.item__about--visible');
});
