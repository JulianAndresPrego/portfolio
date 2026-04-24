/* =================================================
   Julián Andrés Prego — Portfolio Scripts
   Hamburger menu, scroll reveal, experience tabs
   ================================================= */

// Hamburger menu
function toggleMenu() {
  const hb = document.getElementById('hamburger');
  const mn = document.getElementById('mobileNav');
  hb.classList.toggle('open');
  mn.classList.toggle('open');
  document.body.style.overflow = mn.classList.contains('open') ? 'hidden' : '';
}
function closeMenu() {
  document.getElementById('hamburger').classList.remove('open');
  document.getElementById('mobileNav').classList.remove('open');
  document.body.style.overflow = '';
}
// Close menu on resize to desktop
window.addEventListener('resize', () => {
  if (window.innerWidth > 767) closeMenu();
});

// Experience tab switching
function showDetail(id) {
  document.querySelectorAll('.timeline-item').forEach(el => el.classList.remove('active'));
  document.querySelectorAll('.detail-panel').forEach(el => el.classList.remove('active'));
  event.currentTarget.classList.add('active');
  document.getElementById('detail-' + id).classList.add('active');
}

// Scroll reveal
const revealEls = document.querySelectorAll('.reveal');
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry, i) => {
    if (entry.isIntersecting) {
      setTimeout(() => entry.target.classList.add('visible'), i * 80);
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });
revealEls.forEach(el => observer.observe(el));