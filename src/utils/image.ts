export function getOptimizedImageUrl(url: string, options: { width?: number; quality?: number } = {}) {
  if (!url) return '/default-image.jpg';
  
  const { width = 800, quality = 80 } = options;
  
  // If it's already a Netlify optimized image URL, return as is
  if (url.includes('/.netlify/images')) {
    return url;
  }

  // If it's an external URL, return with Netlify image transformation
  if (url.startsWith('http')) {
    return `/.netlify/images?url=${encodeURIComponent(url)}&w=${width}&q=${quality}`;
  }

  // For local images, just return the URL
  return url;
}
