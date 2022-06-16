$(document).ready(function () {
  if ($.cookie("kailashs") == null) {
    $.cookie("kailashs", "2");
    setTimeout(function () {
      $("#myModal").modal("show");
    }, 15);
  }
  //removing cookies
  if ($.cookie("kailashs") == 2) {
    $(".close").click(function () {
      setTimeout(function (s) {
        $.removeCookie("kailashs", { path: "/" });
      }, 8.64e7);
    });
  }
  //adding cookies on click
  $("#btn-submit").click(function () {
    $.cookie("kailashs", "2");
  });
  $(".close").click(function () {
    $(".popup").toggle(".popup-active");
    $(".fade").remove();
  });
  // email validation
  $("#btn-submit").click(function () {
    $(".error").hide();
    var hasError = false;
    var emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
    var emailblockReg =
      /^([\w-\.]+@(?!gmail.com)(?!yahoo.com)(?!hotmail.com)([\w-]+\.)+[\w-]{2,4})?$/;
    var emailaddressVal = $("#UserEmail").val();
    if (emailaddressVal == "") {
      $("#UserEmail").after(
        '<span class="error">Please enter your email address.</span>'
      );
      hasError = true;
    } else if (!emailReg.test(emailaddressVal)) {
      $("#UserEmail").after(
        '<span class="error">Enter a valid email address.</span>'
      );
      hasError = true;
    } else if (!emailblockReg.test(emailaddressVal)) {
      $("#UserEmail").after(
        '<span class="error">No yahoo, gmail or hotmail emails.</span>'
      );
      hasError = true;
    }
    if (hasError == true) {
      alert("error");
      return false;
    } else {
      $(".popup").remove();
      $(".fade").remove();
      alert("email has been sucessfully submited");
    }
  });
});
