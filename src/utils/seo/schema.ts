import type { Article } from '../../types';

export function generateSchema(article: Article) {
  const siteUrl = import.meta.env.PUBLIC_SITE_URL;
  const siteName = import.meta.env.PUBLIC_SITE_TITLE;

  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: article.title,
    description: article.description,
    image: article.image,
    datePublished: article.date?.toISOString(),
    dateModified: article.modifiedDate?.toISOString(),
    author: {
      '@type': 'Person',
      name: article.author,
    },
    publisher: {
      '@type': 'Organization',
      name: siteName,
      logo: {
        '@type': 'ImageObject',
        url: `${siteUrl}/logo.png`,
      },
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `${siteUrl}/articles/${article.slug}`,
    }
  };
}
