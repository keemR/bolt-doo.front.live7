import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import robotsTxt from 'astro-robots-txt';
import netlify from '@astrojs/netlify';
import compress from 'astro-compress';
import prefetch from '@astrojs/prefetch';

export default defineConfig({
  site: process.env.PUBLIC_SITE_URL,
  integrations: [
    tailwind(),
    mdx(),
    sitemap({
      changefreq: 'daily',
      priority: 0.7,
      lastmod: new Date(),
    }),
    robotsTxt({
      policy: [
        {
          userAgent: '*',
          allow: '/',
          disallow: ['/admin', '/private'],
        },
      ],
      sitemap: true,
    }),
    compress({
      img: false,
      svg: true,
      js: true,
      css: true,
      html: {
        removeAttributeQuotes: false,
        removeComments: true,
        removeRedundantAttributes: true,
        removeScriptTypeAttributes: true,
        removeStyleLinkTypeAttributes: true,
        useShortDoctype: true,
        collapseWhitespace: true,
      },
    }),
    prefetch({
      throttle: 3,
      prefetchAll: false,
      selector: "[data-astro-prefetch]",
      ignoreSlowConnection: true,
      include: {
        patterns: [
          '/articles/**',
          '/categories/**'
        ]
      }
    }),
  ],
  output: 'server',
  adapter: netlify(),
  vite: {
    build: {
      cssMinify: true,
      minify: true,
      rollupOptions: {
        output: {
          manualChunks: {
            'vendor': ['date-fns', 'intersection-observer'],
          },
        },
      },
    },
    ssr: {
      noExternal: ['@astrojs/*'],
    },
  },
});
