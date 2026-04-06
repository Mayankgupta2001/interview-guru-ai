import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://interview-guru-ai.vercel.app';

  return [
    {
      url: baseUrl,
      priority: 1.0,
      changeFrequency: 'daily',
    },
    {
      url: `${baseUrl}/evaluate`,
      priority: 0.9,
      changeFrequency: 'daily',
    },
  ];
}