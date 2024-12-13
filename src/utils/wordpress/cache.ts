interface CacheItem {
  data: any;
  timestamp: number;
}

const CACHE_DURATION = 5 * 60 * 1000; // 5 minutes
const cache = new Map<string, CacheItem>();

export function isCacheValid(timestamp: number): boolean {
  return Date.now() - timestamp < CACHE_DURATION;
}

export function getCachedData(key: string): CacheItem | undefined {
  return cache.get(key);
}

export function setCacheData(key: string, data: any): void {
  cache.set(key, { data, timestamp: Date.now() });
}
