function sayHiLater() {
  var greeting = 'Привет заказчик! =)';

  setTimeout(function() {
    console.log(greeting);
  }, 1000);
}

sayHiLater();

function myFunction() {
  var x = document.getElementById('myTopnav');
  if (x.className === 'topnav') {
    x.className += ' responsive';
  } else {
    x.className = 'topnav';
  }
}
