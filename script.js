const buttons = document.querySelectorAll('.toggle-btn');

buttons.forEach(btn => {
  btn.addEventListener('click', () => {
    const content = btn.previousElementSibling;
    content.classList.toggle('expanded');
    btn.textContent = content.classList.contains('expanded') ? 'Read Less' : 'Read More';
  });
});
const articles = document.querySelectorAll('.article');

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target); // Animate only once
    }
  });
}, {
  threshold: 0.1
});

articles.forEach(article => {
  observer.observe(article);
});

