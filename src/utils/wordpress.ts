import type { Article } from '../types';

const WP_API_URL = import.meta.env.PUBLIC_WORDPRESS_API_URL;
const CACHE_DURATION = 5 * 60 * 1000; // 5 minutes

interface CacheItem {
  data: any;
  timestamp: number;
}

const cache = new Map<string, CacheItem>();

function isCacheValid(timestamp: number): boolean {
  return Date.now() - timestamp < CACHE_DURATION;
}

async function fetchWithCache(url: string) {
  const cached = cache.get(url);
  if (cached && isCacheValid(cached.timestamp)) {
    return cached.data;
  }

  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    cache.set(url, { data, timestamp: Date.now() });
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

export async function fetchWordPressArticles(): Promise<Article[]> {
  try {
    const posts = await fetchWithCache(`${WP_API_URL}/wp/v2/posts?_embed`);
    return posts.map(transformWordPressPost);
  } catch (error) {
    console.error('Failed to fetch WordPress articles:', error);
    return [];
  }
}

export async function fetchWordPressArticle(slug: string): Promise<Article | null> {
  try {
    const posts = await fetchWithCache(`${WP_API_URL}/wp/v2/posts?slug=${slug}&_embed`);
    if (posts.length === 0) return null;
    return transformWordPressPost(posts[0]);
  } catch (error) {
    console.error('Failed to fetch WordPress article:', error);
    return null;
  }
}

function transformWordPressPost(post: any): Article {
  if (!post?.title?.rendered) {
    throw new Error('Invalid post data');
  }

  return {
    title: post.title.rendered,
    description: post.excerpt.rendered.replace(/<[^>]*>/g, ''), // Strip HTML
    content: post.content.rendered,
    image: post._embedded?.['wp:featuredmedia']?.[0]?.source_url || '/default-post-image.jpg',
    category: post._embedded?.['wp:term']?.[0]?.[0]?.name || 'Uncategorized',
    href: `/articles/${post.slug}`,
    date: new Date(post.date),
    author: post._embedded?.['author']?.[0]?.name || 'Anonymous',
    tags: post._embedded?.['wp:term']?.[1]?.map((tag: any) => tag.name) || []
  };
}
