/*$(document).ready(function () {
  let firstItem = $(".skills .item:first");
  let height = firstItem.outerHeight();
  let width = firstItem.outerWidth();
  let offset = firstItem.offset();
  let parent = firstItem.parent().offset();
  let top = offset.top - parent.top;

  $("#background").css({
    transform: "translatey(" + top + "px)",
    height: height + "px",
    width: width + "px",
  });
});

$(document).on("mouseenter", ".skills .item", function () {
  let offset = $(this).offset();
  let parent = $(this).parent().offset();
  let top = offset.top - parent.top;

  $("#background").css("transform", "translatey(" + top + "px)");
  let height = $(this).outerHeight();
  let width = $(this).outerWidth();
  $("#background").css({
    height: height + "px",
    width: width + "px",
  });
});*/

$(document).on("mouseenter", ".skills .item", function () {
  let offset = $(this).offset();
  let parent = $(this).parent().offset();
  let top = offset.top - parent.top;

  console.log(top);

  $("#background").css("transform", "translatey(" + top + "px)");
  let height = $(this).outerHeight();
  $("#background").css("height", height);
});

$(document).ready(function () {
  let item = $(".skills .item").first();
  let background = $("#background");
  let height = item.outerHeight();
  setTimeout(function () {
    background.css("transition", "1s all");
  }, 100);
  background.css("height", height);
});

$(window).resize(function () {
  let item = $(".skills .item").first();
  let background = $("#background");
  let height = item.outerHeight();

  background.css("height", height);
});
