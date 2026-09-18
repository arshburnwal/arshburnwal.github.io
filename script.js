// ===== Lucide icons =====
function refreshIcons() {
  if (window.lucide) window.lucide.createIcons();
}
refreshIcons();

// ===== Smooth scroll for internal links =====
document.querySelectorAll('[data-scroll]').forEach((link) => {
  link.addEventListener('click', (e) => {
    const href = link.getAttribute('href');
    if (!href || !href.startsWith('#')) return;
    e.preventDefault();
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      closeMenu();
    }
  });
});

// ===== Mobile menu =====
const menuBtn = document.getElementById('menu-btn');
const mobileMenu = document.getElementById('mobile-menu');
const iconOpen = menuBtn.querySelector('.icon-open');
const iconClose = menuBtn.querySelector('.icon-close');

function closeMenu() {
  mobileMenu.style.maxHeight = '0';
  iconOpen.classList.remove('hidden');
  iconClose.classList.add('hidden');
}

function openMenu() {
  mobileMenu.style.maxHeight = '20rem';
  iconOpen.classList.add('hidden');
  iconClose.classList.remove('hidden');
}

menuBtn.addEventListener('click', () => {
  if (mobileMenu.style.maxHeight && mobileMenu.style.maxHeight !== '0px') {
    closeMenu();
  } else {
    openMenu();
  }
});

// ===== Navbar scroll background =====
const navbar = document.getElementById('navbar');
function onScroll() {
  if (window.scrollY > 12) {
    navbar.classList.add('bg-zinc-950/80', 'backdrop-blur-xl', 'border-b', 'border-white/5');
  } else {
    navbar.classList.remove('bg-zinc-950/80', 'backdrop-blur-xl', 'border-b', 'border-white/5');
  }
}
window.addEventListener('scroll', onScroll, { passive: true });
onScroll();

// ===== Scroll reveal via IntersectionObserver =====
const reveals = document.querySelectorAll('.reveal');
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry, i) => {
      if (entry.isIntersecting) {
        setTimeout(() => entry.target.classList.add('visible'), i * 80);
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.12, rootMargin: '0px 0px -60px 0px' }
);
reveals.forEach((el) => observer.observe(el));

// ===== Back to top =====
document.getElementById('back-top').addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});
