import type { Article } from '../../types';

export function transformWordPressPost(post: any): Article {
  if (!post?.title?.rendered) {
    throw new Error('Invalid post data');
  }

  return {
    title: post.title.rendered,
    description: sanitizeHtml(post.excerpt.rendered),
    content: post.content.rendered,
    image: getPostImage(post),
    category: getPostCategory(post),
    href: `/articles/${post.slug}`,
    date: new Date(post.date),
    author: getPostAuthor(post),
    tags: getPostTags(post)
  };
}

function sanitizeHtml(html: string): string {
  return html.replace(/<[^>]*>/g, '');
}

function getPostImage(post: any): string {
  return post._embedded?.['wp:featuredmedia']?.[0]?.source_url || '/default-post-image.jpg';
}

function getPostCategory(post: any): string {
  return post._embedded?.['wp:term']?.[0]?.[0]?.name || 'Uncategorized';
}

function getPostAuthor(post: any): string {
  return post._embedded?.['author']?.[0]?.name || 'Anonymous';
}

function getPostTags(post: any): string[] {
  return post._embedded?.['wp:term']?.[1]?.map((tag: any) => tag.name) || [];
}
