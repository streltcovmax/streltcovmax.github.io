$(function () {
  $(".formcarryForm").submit(function (e) {
    e.preventDefault();
    var form = $(this);
    var href = form.attr("action");

    $.ajax({
      type: "POST",
      url: href,
      data: new FormData(this),
      dataType: "json",
      processData: false,
      contentType: false,
      success: function (response) {
        if (response.code === 200) {
          alert("Успешно отправлено");

          form[0].reset();
        } else {
          alert("Ошибка: " + response.message);
        }
      },
      error: function (err, textStatus) {
        const error = err.responseJSON;

        // validation error
        $.each(error.errors, function (key) {
          var field = $('[name="' + key + '"]');
          field.addClass("fc-field-error");
        });

        alert(
          "Request failed, " +
            errorObject.title +
            ": " +
            errorObject.message
        );
      },
      complete: function () {},
    });
  });
});