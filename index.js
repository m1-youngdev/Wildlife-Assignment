const slides = document.querySelectorAll('.slide');
  let current = 0;

  function showSlide(index) {
    slides.forEach((slide, i) => {
      slide.classList.toggle('hidden', i !== index);
    });
  }

  document.getElementById('prevBtn').addEventListener('click', () => {
    current = (current - 1 + slides.length) % slides.length;
    showSlide(current);
  });

  document.getElementById('nextBtn').addEventListener('click', () => {
    current = (current + 1) % slides.length;
    showSlide(current);
  });

  // Initialize
  showSlide(current);

