var options = {
  useEasing: true,
  useGrouping: true,
  separator: ",",
  decimal: ".",
};

var statistics = $(".countUp");

// For each Statistic we find, animate it
statistics.each(function (index) {
  // Find the value we want to animate (what lives inside the p tags)
  var value = $(statistics[index]).html();
  // Start animating
  var statisticAnimation = new CountUp(
    statistics[index],
    0,
    value,
    0,
    5,
    options
  );
  statisticAnimation.start();
});
