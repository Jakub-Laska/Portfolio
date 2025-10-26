import './hybridScroll.css';

export function initHybridScroll() {

  const stickySection = document.querySelector('.sticky');
  const scrollSection = document.querySelector('.scroll_section');
  const parent = stickySection.parentElement;
  const gradients = document.querySelectorAll('.background-gradient');
  const header = document.getElementById('header');
  const scrollbar = document.querySelector('.fake-scrollbar .bar');

  function updateTransform() {
    const scrollStart = parent.offsetTop + window.innerHeight;
    const scrollEnd = scrollStart + parent.offsetHeight - window.innerHeight;

    if (window.scrollY >= scrollStart && window.scrollY <= scrollEnd) {
      const progress = (window.scrollY - scrollStart) / (parent.offsetHeight - window.innerHeight);
      document.body.classList.add('show-scrollbar');
      scrollbar.style.width = `${progress * 100}%`;
      document.body.classList.add('hide-scrollbar');
      const maxScroll = scrollSection.scrollWidth - window.innerWidth;
      const translateX = -progress * maxScroll;
      scrollSection.style.transform = `translate3d(${translateX}px, 0, 0)`;
      gradients.forEach(element => {
        element.classList.remove('vertical');
        element.classList.add('horizontal');
      });
      header.style.transform = 'translateY(-200px)';
    } else if (window.scrollY <= scrollStart || window.scrollY >= scrollEnd) {
      header.style.transform = 'translateY(0)';
      document.body.classList.remove('show-scrollbar');
      document.body.classList.remove('hide-scrollbar');
      if (window.scrollY <= scrollStart) {
        gradients.forEach(element => {
          element.classList.remove('horizontal');
          element.classList.remove('vertical');
        });
      } else if (window.scrollY >= scrollEnd) {
        gradients.forEach(element => {
          element.classList.remove('horizontal');
          element.classList.add('vertical');
        });
      }
    }
  }

  let ticking = false;

  window.addEventListener('scroll', () => {
    if (!ticking) {
      window.requestAnimationFrame(() => {
        updateTransform();
        ticking = false;
      });
      ticking = true;
    }
  });

  window.addEventListener('resize', updateTransform);

  updateTransform();


  let isDragging = false;
  let startX = 0;
  let startScrollX = 0;

  const fakeScrollbar = document.querySelector('.fake-scrollbar');

  fakeScrollbar.addEventListener('mousedown', (e) => {
    if (!document.body.classList.contains('show-scrollbar')) return;
    isDragging = true;
    startX = e.clientX;
    startScrollX = parseFloat(scrollbar.style.width) || 0;
    document.body.style.cursor = 'grabbing';
  });

  window.addEventListener('mousemove', (e) => {
    if (!isDragging) return;

    const deltaX = e.clientX - startX;
    const trackWidth = fakeScrollbar.clientWidth;

    const progressDelta = (deltaX / trackWidth) * 100;
    let newProgress = Math.min(Math.max(startScrollX + progressDelta, 0), 100);

    const scrollStart = parent.offsetTop + window.innerHeight;
    const maxScrollY = parent.offsetHeight - window.innerHeight;

    const targetScrollY = scrollStart + (maxScrollY * (newProgress / 100));

    window.scrollTo({
      top: targetScrollY,
      behavior: 'instant'
    });
  });

  window.addEventListener('mouseup', () => {
    if (isDragging) {
      isDragging = false;
      document.body.style.cursor = '';
    }
  });
}