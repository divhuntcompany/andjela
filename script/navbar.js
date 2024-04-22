$(window).scroll(function () {
  let scroll = $(window).scrollTop();
  console.log(scroll);
  if (scroll >= 500) {
    $(".navbar").addClass("sticky");
  } else {
    $(".navbar").removeClass("sticky");
  }
});

$(document).on("click", ".navbar .hamb", function () {
  $(".navbar").toggleClass("mobile");

  if ($(".navbar").hasClass("mobile")) {
    $("body").css("overflow", "hidden");
    setTimeout(function () {
      $(".navbar.mobile .right").css("max-height", "100vh");
    }, 15);
  } else {
    $(".navbar .right").css("max-height", "0px");
    $("body").css("overflow", "");
  }
});
