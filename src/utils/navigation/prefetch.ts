import { canPrefetch } from '../network/connection';

interface PrefetchOptions {
  mode?: 'hover' | 'tap' | 'visible';
  throttle?: number;
}

class PrefetchManager {
  private static instance: PrefetchManager;
  private prefetchQueue: Set<string> = new Set();
  private observer: IntersectionObserver;
  private options: Required<PrefetchOptions>;

  private constructor(options: PrefetchOptions = {}) {
    this.options = {
      mode: options.mode || 'visible',
      throttle: options.throttle || 3
    };

    this.observer = new IntersectionObserver(
      this.handleIntersection.bind(this),
      { rootMargin: '50px' }
    );
  }

  static getInstance(options?: PrefetchOptions): PrefetchManager {
    if (!PrefetchManager.instance) {
      PrefetchManager.instance = new PrefetchManager(options);
    }
    return PrefetchManager.instance;
  }

  private async handleIntersection(entries: IntersectionObserverEntry[]): Promise<void> {
    if (!canPrefetch()) return;

    for (const entry of entries) {
      if (entry.isIntersecting) {
        const link = entry.target as HTMLAnchorElement;
        await this.prefetch(link);
        this.observer.unobserve(link);
      }
    }
  }

  private async prefetch(link: HTMLAnchorElement): Promise<void> {
    try {
      const href = link.href;
      if (this.prefetchQueue.has(href)) return;
      
      this.prefetchQueue.add(href);
      
      // Use native prefetch when available
      if ('prefetch' in HTMLScriptElement.prototype) {
        const prefetchLink = document.createElement('link');
        prefetchLink.rel = 'prefetch';
        prefetchLink.href = href;
        document.head.appendChild(prefetchLink);
      } else {
        // Fallback to fetch
        await fetch(href, { priority: 'low' });
      }
    } catch (error) {
      console.warn('Prefetch failed:', error);
    }
  }

  observe(link: HTMLAnchorElement): void {
    if (this.options.mode === 'visible') {
      this.observer.observe(link);
    }
  }

  cleanup(): void {
    this.observer.disconnect();
    this.prefetchQueue.clear();
  }
}

export function initPrefetch(): void {
  const manager = PrefetchManager.getInstance({
    mode: 'visible',
    throttle: 3
  });

  const links = document.querySelectorAll<HTMLAnchorElement>('[data-astro-prefetch]');
  
  links.forEach(link => {
    if (canPrefetch()) {
      manager.observe(link);
    } else {
      link.removeAttribute('data-astro-prefetch');
    }
  });
}
