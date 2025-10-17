document.addEventListener('DOMContentLoaded', () => {
  const buttons = document.querySelectorAll('.filter');
  const products = document.querySelectorAll('.producto');

  buttons.forEach(btn => {
    btn.addEventListener('click', () => {
      buttons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filter = btn.dataset.filter;
      products.forEach(p => {
        const cat = p.dataset.category;
        if (filter === 'all' || cat === filter) {
          p.classList.remove('hidden');
        } else {
          p.classList.add('hidden');
        }
      });
    });
  });
});