export { initMobileMenu } from './menu';
export { PrefetchController } from './prefetch/PrefetchController';

// Initialize prefetching
document.addEventListener('DOMContentLoaded', () => {
  const prefetchController = PrefetchController.getInstance();
  
  document.querySelectorAll<HTMLAnchorElement>('[data-astro-prefetch]')
    .forEach(link => prefetchController.observe(link));
});
