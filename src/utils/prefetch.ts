export function shouldPrefetch(): boolean {
  if (!('connection' in navigator)) return true;
  
  const connection = (navigator as any).connection;
  
  // Don't prefetch if Save-Data is enabled
  if (connection.saveData) return false;
  
  // Don't prefetch on slow connections
  if (connection.effectiveType === 'slow-2g' || 
      connection.effectiveType === '2g') return false;
      
  return true;
}

export function initPrefetch() {
  const links = document.querySelectorAll('[data-astro-prefetch]');
  
  links.forEach(link => {
    if (!shouldPrefetch()) {
      link.removeAttribute('data-astro-prefetch');
    }
  });
}
