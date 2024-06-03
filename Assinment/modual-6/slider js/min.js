const slides = document.querySelectorAll('.slide');
let currentSlide = 0;

function nextSlide() {
  slides[currentSlide].classList.remove('active');
  currentSlide = (currentSlide + 1) % slides.length;
  slides[currentSlide].classList.add('active');

  // Rotation slider
  const offset = -((currentSlide - 2) * (33));
  document.querySelector('.slider').style.transform = `translateX(${offset}%)`;

  // Blur other slides
  for (let i = 0; i < slides.length; i++) {
    if (i !== currentSlide) {
      slides[i].style.filter = 'blur(2px)';
    } else {
      slides[i].style.filter = 'none';
    }
  }
}

setInterval(nextSlide, 4000);