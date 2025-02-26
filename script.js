document.addEventListener("DOMContentLoaded", function () {
    const images = document.querySelectorAll(".img-zoom");
    
    images.forEach(image => {
      image.addEventListener("click", function () {
        image.classList.toggle("img-zoom");
      });
    });
  });
  
//hitcount start

  // Starting point for the hit counter
const startingCount = 1000;

// Get the counter element
const hitCounterElement = document.getElementById('hit-counter');

// Check if there's already a stored hit counter in localStorage
let hitCount = localStorage.getItem('hitCount');

// If there's no stored hit count, initialize it to the starting count
if (!hitCount) {
    hitCount = startingCount;
} else {
    // Increment the hit count by 1
    hitCount = parseInt(hitCount) + 1;
}

// Update the hit counter display
hitCounterElement.textContent = hitCount;

// Store the updated hit count in localStorage
localStorage.setItem('hitCount', hitCount);
//hitcount end