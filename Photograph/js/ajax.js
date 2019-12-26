$(function () {
    $('form').submit(function (e) {
        var $form = $(this);
        $.ajax({
            type: $form.attr('POST'),
            url: $form.attr('action_ajax_form.php'),
            data: $form.serialize()
        }).done(function () { })
            .fail(function () { });
        e.preventDefault();
    });
});