import type { Article } from '../../types';

export function generateMetaTags(article: Article) {
  const siteTitle = import.meta.env.PUBLIC_SITE_TITLE;
  const siteUrl = import.meta.env.PUBLIC_SITE_URL;
  const defaultImage = `${siteUrl}${import.meta.env.PUBLIC_DEFAULT_IMAGE}`;

  const cleanDescription = article.description
    .replace(/<[^>]*>/g, '')
    .substring(0, 160);

  return {
    title: `${article.title} | ${siteTitle}`,
    description: cleanDescription,
    canonical: `${siteUrl}/articles/${article.slug}`,
    openGraph: {
      title: article.title,
      description: cleanDescription,
      image: article.image || defaultImage,
      type: 'article',
      url: `${siteUrl}/articles/${article.slug}`,
    },
    twitter: {
      card: 'summary_large_image',
      title: article.title,
      description: cleanDescription,
      image: article.image || defaultImage,
    }
  };
}
