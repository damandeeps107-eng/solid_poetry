// SOLID POETRY™ — CLEAN HOMEPAGE INTERACTIVE ENGINE

document.addEventListener('DOMContentLoaded', () => {
  
  // --- Silent Background Slider Engine ---
  const slides = document.querySelectorAll('.bg-slide');
  let currentIndex = 0;

  function nextSlide() {
    if (slides.length === 0) return;
    slides[currentIndex].classList.remove('active');
    currentIndex = (currentIndex + 1) % slides.length;
    slides[currentIndex].classList.add('active');
  }

  // Silent automatic 5-second crossfade
  setInterval(nextSlide, 5000);

  // --- Modal Dialog ---
  const modal = document.getElementById('inquiryModal');
  const modalClose = document.getElementById('modalClose');
  const exploreBtn = document.getElementById('exploreBtn');
  const atelierBtn = document.getElementById('atelierBtn');
  const contactForm = document.getElementById('contactForm');

  function openModal(e) {
    if (e) e.preventDefault();
    modal.classList.add('active');
  }

  function closeModal() {
    modal.classList.remove('active');
  }

  if (exploreBtn) exploreBtn.addEventListener('click', openModal);
  if (atelierBtn) atelierBtn.addEventListener('click', openModal);
  if (modalClose) modalClose.addEventListener('click', closeModal);

  if (modal) {
    modal.addEventListener('click', (e) => {
      if (e.target === modal) closeModal();
    });
  }

  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      alert('Thank you! Your inquiry has been submitted to Solid Poetry Atelier. Our concierge will contact you shortly.');
      contactForm.reset();
      closeModal();
    });
  }
});
