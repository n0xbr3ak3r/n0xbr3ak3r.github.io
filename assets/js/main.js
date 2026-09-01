const button = document.getElementById('theme-toggle');
const saved = localStorage.getItem('theme');
if (saved) document.documentElement.dataset.theme = saved;
button?.addEventListener('click', () => {
  const next = document.documentElement.dataset.theme === 'dark' ? 'light' : 'dark';
  document.documentElement.dataset.theme = next;
  localStorage.setItem('theme', next);
});
const observer = new IntersectionObserver(entries => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); }), {threshold:.08});
document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
