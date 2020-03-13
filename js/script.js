function sayHiLater() {
  var greeting = 'Привет заказчик! =)';

  setTimeout(function() {
    console.log(greeting);
  }, 1000);
}

sayHiLater();
