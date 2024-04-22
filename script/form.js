$(document).on("submit", ".form form", function (event) {
  event.preventDefault();
  let data = $(this).serializeArray();
  fetch("https://google.com", {
    method: "POST",
    body: {
      first_name: data[0],
      last_name: data[1],
      email: data[2],
      number: data[3],
      description: data[4],
    },
  })
    .then(function () {
      alert("cd");
    })
    .catch(function () {
      alert("htr");
    });
});
