document.addEventListener("DOMContentLoaded", function () {
    const images = document.querySelectorAll(".img-zoom");
    
    images.forEach(image => {
      image.addEventListener("click", function () {
        image.classList.toggle("img-zoom");
      });
    });
  });
  