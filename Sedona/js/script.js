var Toggle = document.querySelector('.main-nav__toggle');
var Close = document.querySelector('.main-nav__close');
var Menu = document.querySelector('.menu');
var Triangle = document.querySelector('.main__triangle');

Toggle.addEventListener('click',function(event) {
    event.preventDefault();
    Menu.classList.add('menu--show');
    Triangle.classList.add('main__triangle--close');
});

Close.addEventListener('click',function(event) {
    event.preventDefault();
    Menu.classList.remove('menu--show');
    Triangle.classList.remove('main__triangle--close');
});



function sayHiLater() {
  
  var greeting = 'Hi!';

  setTimeout(function() {

        console.log(greeting);

  }, 1000);

}

sayHiLater();


