import './hybridScroll.css';

export function initHybridScroll() {

  const stickySection = document.querySelector('.sticky');
  const scrollSection = document.querySelector('.scroll_section');
  const parent = stickySection.parentElement;
  const gradients = document.querySelectorAll('.background-gradient');
  const header = document.getElementById('header');
  const scrollbar = document.querySelector('.fake-scrollbar .bar');
  const fakeScrollbar = document.querySelector('.fake-scrollbar');

  let scrollProgress = 0;

  function updateTransform() {
    const scrollStart = parent.offsetTop + window.innerHeight;
    const scrollEnd = scrollStart + parent.offsetHeight - window.innerHeight;
    const maxScroll = scrollEnd - scrollStart;

    if (window.scrollY >= scrollStart && window.scrollY <= scrollEnd) {
      scrollProgress = (window.scrollY - scrollStart) / maxScroll;
      document.body.classList.add('show-scrollbar');
      document.body.classList.add('hide-scrollbar');

      scrollbar.style.width = `${scrollProgress * 100}%`;

      const maxScrollX = scrollSection.scrollWidth - window.innerWidth;
      const translateX = -scrollProgress * maxScrollX;
      scrollSection.style.transform = `translate3d(${translateX}px, 0, 0)`;

      gradients.forEach(element => {
        element.classList.remove('vertical');
        element.classList.add('horizontal');
      });
      header.style.transform = 'translateY(-200px)';
    } else {
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
    const scrollStart = parent.offsetTop + window.innerHeight;
    const scrollEnd = scrollStart + parent.offsetHeight - window.innerHeight;
    const maxScroll = scrollEnd - scrollStart;
    const progress = Math.min(Math.max((window.scrollY - scrollStart) / maxScroll, 0), 1);
    scrollbar.style.width = `${progress * 100}%`;

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

  // Drag handling
  let isDragging = false;
  let startX = 0;
  let startProgress = 0;

  fakeScrollbar.addEventListener('mousedown', (e) => {
    if (!document.body.classList.contains('show-scrollbar')) return;
    isDragging = true;
    startX = e.clientX;
    startProgress = scrollProgress * 100; // w %
    document.body.style.cursor = 'grabbing';
  });

  window.addEventListener('mousemove', (e) => {
    if (!isDragging) return;

    const deltaX = e.clientX - startX;
    const trackWidth = fakeScrollbar.clientWidth;

    const progressDelta = (deltaX / trackWidth) * 100;
    let newProgress = Math.min(Math.max(startProgress + progressDelta, 0), 100);

    const scrollStart = parent.offsetTop + window.innerHeight;
    const scrollEnd = scrollStart + parent.offsetHeight - window.innerHeight;
    const maxScrollY = scrollEnd - scrollStart;

    const targetScrollY = scrollStart + (maxScrollY * (newProgress / 100));
    window.scrollTo(0, targetScrollY);
  });

  window.addEventListener('mouseup', () => {
    if (isDragging) {
      isDragging = false;
      document.body.style.cursor = '';
    }
  });
}
