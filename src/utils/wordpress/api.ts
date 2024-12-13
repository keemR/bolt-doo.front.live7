import { getCachedData, isCacheValid, setCacheData } from './cache';

const WP_API_URL = import.meta.env.PUBLIC_WORDPRESS_API_URL;

export async function fetchWithCache(url: string) {
  const cached = getCachedData(url);
  if (cached && isCacheValid(cached.timestamp)) {
    return cached.data;
  }

  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    setCacheData(url, data);
    return data;
  } catch (error) {
    console.error(`Failed to fetch from WordPress: ${error}`);
    if (cached) {
      console.log('Using stale cache data');
      return cached.data;
    }
    throw error;
  }
}

export function buildApiUrl(endpoint: string, params: Record<string, string> = {}): string {
  const url = new URL(`${WP_API_URL}${endpoint}`);
  Object.entries(params).forEach(([key, value]) => {
    url.searchParams.append(key, value);
  });
  return url.toString();
}
