window.addEventListener('deviceorientation', handleOrientation);

function handleOrientation(event) {
  // Extract rotation values
  const alpha = event.alpha; // Z-axis rotation (compass direction)
  const beta = event.beta;   // X-axis rotation (tilt front-to-back)
  const gamma = event.gamma; // Y-axis rotation (tilt left-to-right)

  // Apply the rotation to the card
  const card = document.getElementById('card');
  card.style.transform = `rotateX(${beta}deg) rotateY(${gamma}deg) rotateZ(${alpha}deg)`;
}


