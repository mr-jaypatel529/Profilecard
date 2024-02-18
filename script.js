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

window.addEventListener('deviceorientation', handleOrientation);

function handleOrientation(event) {
    var beta = event.beta; // Rotation around the front-to-back axis
    var gamma = event.gamma; // Rotation around the left-to-right axis

    // Apply the rotation to your card
    document.getElementById('card-container').style.transform = 
        'rotateX(' + beta + 'deg) rotateY(' + gamma + 'deg)';
}

