import { networkStatus } from '../../network/status';
import type { NetworkStatus } from '../../network/types';
import { PrefetchQueue } from './PrefetchQueue';
import { PrefetchStrategy } from './PrefetchStrategy';

export class PrefetchController {
  private static instance: PrefetchController;
  private queue: PrefetchQueue;
  private strategy: PrefetchStrategy;
  private enabled: boolean = true;

  private constructor() {
    this.queue = new PrefetchQueue();
    this.strategy = new PrefetchStrategy();
    this.setupNetworkListener();
  }

  static getInstance(): PrefetchController {
    if (!PrefetchController.instance) {
      PrefetchController.instance = new PrefetchController();
    }
    return PrefetchController.instance;
  }

  private setupNetworkListener(): void {
    networkStatus.addListener(this.handleNetworkChange.bind(this));
  }

  private handleNetworkChange(status: NetworkStatus): void {
    this.enabled = !status.isSlowConnection && !status.isSaveDataEnabled;
    
    if (!this.enabled) {
      this.queue.clear();
      this.removeAllPrefetchAttributes();
    }
  }

  private removeAllPrefetchAttributes(): void {
    document.querySelectorAll('[data-astro-prefetch]')
      .forEach(el => el.removeAttribute('data-astro-prefetch'));
  }

  async prefetch(url: string): Promise<void> {
    if (!this.enabled) return;

    try {
      await this.strategy.prefetch(url);
    } catch (error) {
      console.warn(`Failed to prefetch ${url}:`, error);
    }
  }

  observe(element: HTMLElement): void {
    if (!this.enabled) return;
    this.strategy.observe(element);
  }

  cleanup(): void {
    this.queue.clear();
    this.strategy.cleanup();
  }
}
