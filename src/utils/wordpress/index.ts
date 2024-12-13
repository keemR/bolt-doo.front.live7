import { fetchWithCache, buildApiUrl } from './api';
import { transformWordPressPost } from './transform';
import type { Article } from '../../types';

export async function fetchWordPressArticles(): Promise<Article[]> {
  try {
    const url = buildApiUrl('/wp/v2/posts', { _embed: 'true' });
    const posts = await fetchWithCache(url);
    return posts.map(transformWordPressPost);
  } catch (error) {
    console.error('Failed to fetch WordPress articles:', error);
    return [];
  }
}

export async function fetchWordPressArticle(slug: string): Promise<Article | null> {
  try {
    const url = buildApiUrl('/wp/v2/posts', { slug, _embed: 'true' });
    const posts = await fetchWithCache(url);
    if (posts.length === 0) return null;
    return transformWordPressPost(posts[0]);
  } catch (error) {
    console.error('Failed to fetch WordPress article:', error);
    return null;
  }
}

export * from './types';
