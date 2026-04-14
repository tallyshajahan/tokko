let currentSlide = 0;
const slides = document.querySelectorAll('.slide');

function showSlide(n) {
  slides[currentSlide].classList.remove('active');
  currentSlide = (n + slides.length) % slides.length;
  slides[currentSlide].classList.add('active');
}

function changeSlide(n) {
  showSlide(currentSlide + n);
}

setInterval(() => changeSlide(1), 4000);