const items = document.querySelectorAll('.item');
const imageWrapper = document.getElementById('imageWrapper');

items.forEach((item, index) => {
  item.addEventListener('mouseenter', () => {
    items.forEach(i => i.classList.remove('active'));
    item.classList.add('active'); 
    const offset = index * 500; 
    imageWrapper.style.transform = `translateY(-${offset}px)`;
  });
});

items[0].classList.add('active');
imageWrapper.style.transform = 'translateY(0)';
imageWrapper.style.transition = 'transform 0.2s ease-in-out';