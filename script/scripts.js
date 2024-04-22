$(window).scroll(function () {
  let scroll = $(window).scrollTop();
  if (scroll > 300) {
    $("footer .top").show();
  } else {
    $("footer .top").hide();
  }
});

$(document).on("click", "footer .top", function () {
  $("html, body").animate({ scrollTop: 0 }, "slow");
});

//loader
$(document).ready(function () {
  setTimeout(function () {
    $("footer .loader").fadeOut();
  }, 3000);
  setTimeout(function () {
    $("footer .loader").css("transform", "translateY(10%)");
  }, 2500);
  setTimeout(function () {
    $("footer .loader").css("transform", "translateY(-100%)");
  }, 2700);
});

//scroll
$(document).on("click", "[data-scroll]", function () {
  let id = $(this).attr("data-scroll");
  let target = $("#" + id).offset();
  $("html, body").animate({ scrollTop: target.top }, "slow");
});
