import { MetadataRoute } from 'next'
import { getAllSlugs } from './blog/_posts'
import interviews from '@/data/interviews.json'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://interview-guru-ai.vercel.app'
  const now = new Date()

  // Blog URLs
  const blogUrls: MetadataRoute.Sitemap = getAllSlugs().map((slug) => ({
    url: `${baseUrl}/blog/${slug}`,
    lastModified: now,
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }))

  // Interview category URLs
  const interviewUrls: MetadataRoute.Sitemap = interviews.map((interview) => ({
    url: `${baseUrl}/interview/${interview.slug}`,
    lastModified: now,
    changeFrequency: 'weekly' as const,
    priority: 0.75,
  }))

  return [
    // Main pages
    {
      url: baseUrl,
      lastModified: now,
      priority: 1.0,
      changeFrequency: 'daily',
    },
    {
      url: `${baseUrl}/mock-interview`,
      lastModified: now,
      changeFrequency: 'daily',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/evaluate`,
      lastModified: now,
      changeFrequency: 'daily',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/questions`,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.5,
    },
    {
      url: `${baseUrl}/privacy`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.3,
    },
    // All blog posts and interview categories
    ...blogUrls,
    ...interviewUrls,
  ]
}