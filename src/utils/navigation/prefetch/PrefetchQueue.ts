export class PrefetchQueue {
  private queue: Set<string> = new Set();
  private inProgress: Set<string> = new Set();
  private maxConcurrent: number = 3;

  add(url: string): void {
    if (!this.queue.has(url) && !this.inProgress.has(url)) {
      this.queue.add(url);
    }
  }

  async process(handler: (url: string) => Promise<void>): Promise<void> {
    if (this.inProgress.size >= this.maxConcurrent) return;

    const url = Array.from(this.queue)[0];
    if (!url) return;

    this.queue.delete(url);
    this.inProgress.add(url);

    try {
      await handler(url);
    } finally {
      this.inProgress.delete(url);
    }
  }

  clear(): void {
    this.queue.clear();
    this.inProgress.clear();
  }
}
