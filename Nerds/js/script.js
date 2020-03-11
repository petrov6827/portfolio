    var link = document.querySelector(".contacts-btn.write-us");
    var popup = document.querySelector(".modal-content");
    var close = document.querySelector(".modal-content-close"); //закрыть форму
    var login = popup.querySelector("[name=username]"); //фокус на имя
    var form = popup.querySelector("form");
    var email = popup.querySelector("[name=email]");

    link.addEventListener("click", function(event) { //открыть форму
      event.preventDefault();
      popup.classList.add("modal-content-show");
      login.focus(); //фокус на имя
    });    

    close.addEventListener("click", function(event) { //закрыть форму
      event.preventDefault();
      popup.classList.remove("modal-content-show");
      popup.classList.remove("modal-error");
    });

    form.addEventListener("submit", function(event) { //проверка на введение почты
      if (!email.value) {
        event.preventDefault();
        popup.classList.add("modal-error"); //вместо таблички потрясем форму)
        console.log("Enter your e-mail"); //какую табличку сюда?
      }
    })

    window.addEventListener("keydown", function(event) {
      if (event.keyCode === 27) { //закрытие при нажатии на ESC
        popup.classList.remove("modal-content-show");
        popup.classList.remove("modal-error");
      }
    });