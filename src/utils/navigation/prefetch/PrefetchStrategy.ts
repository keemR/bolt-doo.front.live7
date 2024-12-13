export class PrefetchStrategy {
  private observer: IntersectionObserver;
  private prefetched: Set<string> = new Set();

  constructor() {
    this.observer = new IntersectionObserver(
      this.handleIntersection.bind(this),
      { rootMargin: '50px' }
    );
  }

  private async handleIntersection(entries: IntersectionObserverEntry[]): Promise<void> {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const element = entry.target as HTMLAnchorElement;
        if (element.href && !this.prefetched.has(element.href)) {
          this.prefetch(element.href);
        }
        this.observer.unobserve(element);
      }
    });
  }

  async prefetch(url: string): Promise<void> {
    if (this.prefetched.has(url)) return;
    
    this.prefetched.add(url);

    try {
      if ('prefetch' in HTMLScriptElement.prototype) {
        const link = document.createElement('link');
        link.rel = 'prefetch';
        link.href = url;
        document.head.appendChild(link);
      } else {
        await fetch(url, { 
          priority: 'low',
          credentials: 'same-origin'
        });
      }
    } catch (error) {
      this.prefetched.delete(url);
      throw error;
    }
  }

  observe(element: HTMLElement): void {
    if (element instanceof HTMLAnchorElement) {
      this.observer.observe(element);
    }
  }

  cleanup(): void {
    this.observer.disconnect();
    this.prefetched.clear();
  }
}
