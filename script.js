document.addEventListener("DOMContentLoaded", function () {
    VanillaTilt.init(document.getElementById("profile"), {
        max: 25,
        speed: 400,
    });
});

$(document).ready(function() {
  $(".click-effect").click(function() {
    $(this).animate({ marginLeft: "50px" }, "slow");
  });
});

