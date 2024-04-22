/*function showTab(tabIndex) {
  $(".content > div").hide();

  var selectedTabContent = $(".content > div").eq(tabIndex);
  if (selectedTabContent.length) {
    selectedTabContent.show();
  }
}

$(".navigation .button").each(function (index) {
  $(this).on("click", function () {
    showTab(index);
  });
});*/

function showTab(text) {
  $(".tabs .content > div").hide();
  let tabs = $(".tabs .content > div");
  $.each(tabs, function () {
    let group = $(this).attr("data-group");
    if (group === text) {
      $(this).fadeIn();
    }
  });
}

$(document).on("click", ".tabs .navigation .button", function () {
  let text = $(this).text();
  showTab(text);
});
