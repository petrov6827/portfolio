$('#sendMail').on('click', function() {
  var name = $('#name')
    .val()
    .trim();
  var email = $('#email')
    .val()
    .trim();
  var tel = $('#tel')
    .val()
    .trim();
  var files = $('#files')
    .val()
    .trim();
  var message = $('#message')
    .val()
    .trim();

  if (name == '') {
    $('errorMess').text('Введите имя');
    return false;
  } else if (email == '') {
    $('errorMess').text('Введите email');
    return false;
  } else if (tel == '') {
    $('errorMess').text('Введите телефон');
    return false;
  }

  $('#errorMess').text('');

  $.ajax({
    url: 'ajax/mail.php',
    type: 'POST',
    cache: false,
    data: {
      name: name,
      email: email,
      tel: tel,
      files: files,
      message: message
    },
    dataType: 'html',
    beforeSend: function() {
      $('#sendMail').prop('disabled', true);
    },
    success: function(data) {
      if (!data) alert('Были ошибки, сообщение не отправлено!');
      else $('#mailForm').trigger('reset');
      $('#sendMail').prop('disabled', false);
    }
  });
});
