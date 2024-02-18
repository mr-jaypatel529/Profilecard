document.addEventListener("DOMContentLoaded", function () {
    VanillaTilt.init(document.querySelector(".profile"), {
      max: 25,
      speed: 400,
    });
  
    var gn = new GyroNorm();
  
    gn.init().then(function () {
      gn.start(function (data) {
        // Use the device orientation data to apply tilt effect
        var tiltX = data.do.gamma;
        var tiltY = data.do.beta;
  
        VanillaTilt.setTilt({
          x: tiltX,
          y: tiltY,
        });
      });
    });
  });
  
