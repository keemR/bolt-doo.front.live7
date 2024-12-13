import type { Article } from '../types';

export function generateMetaTags(article: Article) {
  const siteTitle = import.meta.env.PUBLIC_SITE_TITLE;
  const siteUrl = import.meta.env.PUBLIC_SITE_URL;
  const defaultImage = `${siteUrl}/default-og-image.jpg`;

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
      article: {
        publishedTime: article.date?.toISOString(),
        modifiedTime: article.modifiedDate?.toISOString(),
        authors: [article.author],
        tags: article.tags,
      },
    },
    twitter: {
      card: 'summary_large_image',
      title: article.title,
      description: cleanDescription,
      image: article.image || defaultImage,
    },
    schema: generateSchema(article),
  };
}

function generateSchema(article: Article) {
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
    },
    keywords: article.tags?.join(', '),
  };
}
